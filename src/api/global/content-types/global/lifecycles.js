module.exports = {
    async afterUpdate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

    // Split the string into an array of email addresses
    const emailAddresses = result.siteName.split(',');

        try{
          for (const email of emailAddresses) {
                      var dynamicValue = btoa(email);
            var html = "<b>hello</b>"
      await strapi.plugins['email'].services.email.send({
        to: email.trim(),
        subject: "hi",
        html
      });
      console.log(`Email sent successfully to ${email}`);
    }
          console.log('All emails sent successfully.');
        } catch(err) {
            console.error('Error sending emails:', err);
        }
    }
}
