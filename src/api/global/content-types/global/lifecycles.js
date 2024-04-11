module.exports = {
    async afterUpdate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

      console.log(event)

        try{
            await strapi.plugins['email'].services.email.send({
              to: 'salaheddine.boulahya@gmail.com',
              from: 'no-reply@strapiapp.com', // e.g. single sender verification in SendGrid
              subject: event.result.id,
              text: event.result.id
            })
        } catch(err) {
            console.log(err);
        }
    }
}
