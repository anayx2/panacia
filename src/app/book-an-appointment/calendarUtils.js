import { google } from 'googleapis';

export const scheduleAppointment = async (appointmentDetails) => {
    const { title, description, startTime, endTime } = appointmentDetails;

    const auth = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.GOOGLE_REDIRECT_URI
    );
    auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

    const calendar = google.calendar({ version: 'v3', auth });

    const event = {
        summary: title,
        description,
        start: {
            dateTime: startTime,
            timeZone: 'Asia/Kolkata',
        },
        end: {
            dateTime: endTime,
            timeZone: 'Asia/Kolkata',
        },
    };

    const response = await calendar.events.insert({
        calendarId: 'primary',
        resource: event,
    });

    return response.data;
};
