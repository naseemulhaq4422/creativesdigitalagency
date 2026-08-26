import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, type, interest, budgetOrBatch, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, phone, message)" },
        { status: 400 }
      );
    }

    // Save lead to database
    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        email,
        phone,
        type: type || "agency_quote",
        interest: interest || "General Inquiry",
        budgetOrBatch: budgetOrBatch || "Not specified",
        message,
        status: "NEW",
      },
    });

    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully", inquiryId: inquiry.id },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry. Please try again or WhatsApp us directly." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ inquiries });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch inquiries" }, { status: 500 });
  }
}
