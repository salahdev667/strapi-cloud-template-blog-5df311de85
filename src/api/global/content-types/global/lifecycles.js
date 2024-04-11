module.exports = {
    async afterUpdate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

    // Split the string into an array of email addresses
    const emailAddresses = result.siteName.split(',');

        try{
            await strapi.plugins['email'].services.email.send({
              to: emailAddresses,
              from: 'no-reply@strapiapp.com', // e.g. single sender verification in SendGrid
              subject: 'test',
              text: 'test'
            })
        } catch(err) {
            console.log(err);
        }
    }
}
