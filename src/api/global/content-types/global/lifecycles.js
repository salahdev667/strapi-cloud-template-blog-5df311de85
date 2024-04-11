module.exports = {
    async afterUpdate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

      console.log(result.siteDecription)

        try{
            await strapi.plugins['email'].services.email.send({
              to: 'salaheddine.boulahya@gmail.com',
              from: 'no-reply@strapiapp.com', // e.g. single sender verification in SendGrid
              subject: 'The Strapi Email plugin worked successfully',
              text: result.siteDecription, 
                
            })
        } catch(err) {
            console.log(err);
        }
    }
}
