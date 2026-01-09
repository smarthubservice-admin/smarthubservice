const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Create email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER || 'smarthubserviceinfo@gmail.com',
        pass: process.env.GMAIL_PASSWORD
    }
});

// Verify transporter connection
transporter.verify((error, success) => {
    if (error) {
        console.error('Transporter error:', error);
    } else {
        console.log('Email service ready to send messages');
    }
});

// Send email endpoint
app.post('/api/send-email', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'All fields are required' 
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid email address' 
            });
        }

        // Email to admin
        const adminMailOptions = {
            from: process.env.GMAIL_USER || 'smarthubserviceinfo@gmail.com',
            to: 'smarthubserviceinfo@gmail.com',
            subject: `New Message from ${name} via Smart Hub Service`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p><em>This message was sent from the Smart Hub Service website contact form.</em></p>
            `
        };

        // Confirmation email to user
        const userMailOptions = {
            from: process.env.GMAIL_USER || 'smarthubserviceinfo@gmail.com',
            to: email,
            subject: 'We Received Your Message - Smart Hub Service',
            html: `
                <h2>Thank You for Contacting Us!</h2>
                <p>Hello ${name},</p>
                <p>We have received your message and appreciate you reaching out to Smart Hub Service.</p>
                <p>Our team will review your inquiry and get back to you as soon as possible.</p>
                <hr>
                <p><strong>Your Message Details:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p>Best regards,<br>Smart Hub Service Team</p>
            `
        };

        // Send both emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);

        res.json({ 
            success: true, 
            message: 'Email sent successfully!' 
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send email. Please try again later.' 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
