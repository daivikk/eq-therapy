import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_R7hNnYjE_79dweCAhZ3F6qJjGzWbmtdt3');

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      patientName, 
      patientEmail, 
      patientPhone, 
      patientReferral,
      therapistName, 
      therapistId, 
      appointmentDate, 
      appointmentTime 
    } = body;

    // Generate therapist email based on their name
    // Format: firstname@eqtherapy.co
    const therapistFirstName = therapistName.split(' ')[0].toLowerCase();
    const therapistEmail = `${therapistFirstName}@eqtherapy.co`;

    // Create email content with booking information
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #503622;">New Appointment Booking</h2>
        <p>A new appointment has been booked through the EQ Therapy website.</p>
        
        <h3 style="color: #503622; margin-top: 20px;">Appointment Details</h3>
        <ul style="list-style-type: none; padding-left: 0;">
          <li><strong>Therapist:</strong> ${therapistName} (ID: ${therapistId})</li>
          <li><strong>Date:</strong> ${appointmentDate}</li>
          <li><strong>Time:</strong> ${appointmentTime}</li>
        </ul>
        
        <h3 style="color: #503622; margin-top: 20px;">Patient Information</h3>
        <ul style="list-style-type: none; padding-left: 0;">
          <li><strong>Name:</strong> ${patientName}</li>
          <li><strong>Email:</strong> ${patientEmail}</li>
          <li><strong>Phone:</strong> ${patientPhone}</li>
          ${patientReferral ? `<li><strong>Referral Source:</strong> ${patientReferral}</li>` : ''}
        </ul>
        
        <p style="margin-top: 20px;">Please contact the patient to confirm this appointment.</p>
      </div>
    `;

    // Send email notification to both admin and therapist
    const { data, error } = await resend.emails.send({
      from: 'EQ Therapy <admin@eqtherapy.co>', //admin@eqtherapy.co
      to: [therapistEmail, 'admin@eqtherapy.co'], // Admin and therapist emails
      subject: `New Appointment: ${patientName} with ${therapistName}`,
      html: emailHtml,
      // Optional: Send confirmation to patient
      // cc: [patientEmail]
    });

    if (error) {
      console.error('Email error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    console.log('Email sent successfully to:', ['daivik.d.patel@gmail.com', therapistEmail]);

    return NextResponse.json({ 
      message: 'Appointment booked successfully',
      emailSent: true,
      recipients: ['daivik.d.patel@gmail.com', therapistEmail]
    });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}