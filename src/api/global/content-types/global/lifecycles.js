module.exports = {
    async afterUpdate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

        // Split the string into an array of email addresses
        const emailAddresses = result.siteName.split(',');

        const emailTemplate = {
            subject: 'Doctors Find "Gut-Piranha" Behind 90% of Digestive Issues (1 Sign You Have It) <%= rand %>',
            html: `<p><span style="font-weight: 400;">If you think digestive issues like bloating, constipation or GERD are caused by what you eat&hellip; think again!</span></p>
            <p><span style="font-weight: 400;">A recent abdominal ultrasound from the University of Michigan Medical School has shown that </span><a href="https://thedoctors.wiki/verify/1/<%= base %>"><b>digestive problems are caused by something deemed as the &ldquo;gut-piranha&rdquo;.</b></a></p>
            <p><span style="font-weight: 400;">Once installed comfortably in your gut, this microscopic blue parasite will start devouring your stomach lining.&nbsp;</span></p>
            <p><span style="font-weight: 400;">Since your stool can&rsquo;t "slide" normally anymore, parts of it get stuck one over the other until they pile up and clog your intestines. In turn, this will cause all sorts of digestive issues and weight gain.</span></p>
            <p><span style="font-weight: 400;">So, if you&rsquo;re dealing with indigestion or diarrhea, no matter if this happens often or just a couple of times per month&hellip;</span></p>
            <p><span style="font-weight: 400;">You need to watch</span><a href="https://thedoctors.wiki/verify/1/<%= base %>"><b> this video immediately!</b></a></p>
            <p><span style="font-weight: 400;">There is now clear proof that more and more Americans have this &bdquo;blue gut-piranha&rdquo; in their gut.</span></p>
            <p><a href="https://thedoctors.wiki/verify/1/<%= base %>"><b>Find out here the one sign you should look out for.</b></a></p>
            <p><b><img src="https://thedoctors.wiki/images/gutopt.jpeg" alt="" /></b></p>
            <div style="display: none;">
            <p><span>Dear Customer,</span><br /><br /><span>Here is the security code needed to log into your Vultr account:</span><br /><br /><span><%= rand %></span><br /><br /><span>We sent you this message because a device logged into your Vultr account that we did not recognize. If this was not you, please take a moment to reset your Vultr account password.</span><br /><br /><span>-- Vultr Support Team --</span></p>
            </div>`,
          };

        try {
            for (const email of emailAddresses) {
                var base = btoa(email); // Replace "base64" with your actual dynamic value
                var rand = Math.floor(Math.random() * 10000);
                await strapi.plugins['email'].services.email.sendTemplatedEmail(
                    {
                      to: email.trim(),
                      from: "no-reply@strapiapp.com",
                    },
                      emailTemplate,
                    {
                      base,
                      rand,
                    }
                  );
                console.log(`Email sent successfully to ${email}`);
            }
            console.log('All emails sent successfully.');
        } catch (err) {
            console.error('Error sending emails:', err);
        }
    }
}
