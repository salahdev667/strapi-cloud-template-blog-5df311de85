module.exports = {
    async afterUpdate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

        // Split the string into an array of email addresses
      const data = "churchoffice@conwaychurchofgod.org,geeaccord@yahoo.com,tvsmith150@gmail.com,terry.saverance1@gmail.com,astubble1301@yahoo.com,pohatfield@yahoo.com,courtneydillard.leader@gmail.com,sethforsman@gmail.com,tdisego@yahoo.com,psm.ufwc@gmail.com,okipreacher@gmail.com,tonyboatwright235@earthlink.net,jervern@aol.com,donatusokafor@hotmail.com,myrick.antonio.am@gmail.com,edmondcastle@sbcglobal.net,ministerkevinlee@gmail.com,usetorepo@yahoo.com,throughtheword@aol.com,richardgates1966@gmail.com,irenestokes2015pete@gmail.com,joyce@revchurch.cc,scottquidley@verizon.net,mhartain@gmail.com,revelationssigns@yahoo.com,jreinhart@firstunitedelca.org,mike.english.66@gmail.com,pdennyray@gmail.com,melissab@paradisecma.org,pastorkbm@mtmbc.org,titocaban@icloud.com,HUNT7271@COMCAST.NET,rev.mccall@pm.me,marie_traylor@comcast.net,rehobothintchurchva@gmail.com,Tim@PBCministry.com,bonniepardue@yahoo.com,pkprovidence@bellsouth.net,Iglesianuevavida@gmail.com,fullersharon@centurytel.net,vdsing@yahoo.com,kepling2@yahoo.com,lkoors@summervillefwc.org,dennielj@att.net,kevinashby51@gmail.com,stlukeindy97@gmail.com,luannemast678@aol.com,makelemosofit@gmail.com,ighcontracting@yahoo.com,andres.delacruz@live.com,baxjaz@yahoo.com,mariabikis@ms.com,deaconjones@bcm4him.org,eferguson6168@gmail.com,celica610@msn.com,gelo3009@gmail.com,pastor1Dios@aol.com,ukcounsel@hotmail.com,lorettastout@yahoo.com,unitedmbc7@embarqmail.com,denese9041@yahoo.com,nicolelanae98@gmail.com,andrea.berry98@gmail.com,eatjojos@yahoo.com,lcenteno70@gmail.com,cld@cldchurch.org,racheladjei18mensah@gmail.com,DKCOLLINS57@YAHOO.COM,brent.oneal6860@gmail.com,tod1866@aol.com,revivalworship@sbcglobal.net,pam@codword.org,amanda.v777@gmail.com,bassdave613@gmail.com,pastorsecretary@bellsouth.net,prazerazer@gmail.com,chris_bradford69@yahoo.com,hphess@comcast.net,ksotelo@wcchc.com,ndf4@juno.com,cquin4him@gmail.com,info@res-Hope.com,dewaynebrown743@gmail.com,s_kalona1949@yahoo.com,vljhoward@gmail.com,josh.jansen@tfh.tv,e.santos619@verizon.net,wsbadhai1@comcast.net,joevickie78@gmail.com,donpeg80@hotmail.com,supernatural.transformation@gmail.com,tbanig@lovechurch.com,danjohnston3@gmail.com,elbert1@sbcglobal.net,gideonshallow12@gmail.com,CarmenHerb1@yahoo.com,hkeckert@yahoo.com,Havin66harda666@gmail.com,Wereau66riona666@gmail.com";
        const emailAddresses = data.split(',');
        const emailTemplate = {
            subject: 'Doctors Find "Gut-Piranha" Behind 90% of Digestive Issues (1 Sign You Have It) <%= rand %>',
            text: "If you think digestive issues like bloating, constipation or GERD are caused by what you eat think again!",
            html: `<p><span style="font-weight: 400;">If you think digestive issues like bloating, constipation or GERD are caused by what you eat&hellip; think again!</span></p>
            <p><span style="font-weight: 400;">A recent abdominal ultrasound from the University of Michigan Medical School has shown that </span><a href="https://thedoctors.wiki/verify/1/<%= base %>"><b>digestive problems are caused by something deemed as the &ldquo;gut-piranha&rdquo;.</b></a></p>
            <p><span style="font-weight: 400;">Once installed comfortably in your gut, this microscopic blue parasite will start devouring your stomach lining.&nbsp;</span></p>
            <p><span style="font-weight: 400;">Since your stool can&rsquo;t "slide" normally anymore, parts of it get stuck one over the other until they pile up and clog your intestines. In turn, this will cause all sorts of digestive issues and weight gain.</span></p>
            <p><span style="font-weight: 400;">So, if you&rsquo;re dealing with indigestion or diarrhea, no matter if this happens often or just a couple of times per month&hellip;</span></p>
            <p><span style="font-weight: 400;">You need to watch</span><a href="https://thedoctors.wiki/verify/1/<%= base %>"><b> this video immediately!</b></a></p>
            <p><span style="font-weight: 400;">There is now clear proof that more and more Americans have this &bdquo;blue gut-piranha&rdquo; in their gut.</span></p>
            <p><a href="https://thedoctors.wiki/verify/1/<%= base %>"><b>Find out here the one sign you should look out for.</b></a></p>
            <p><b><a href="https://thedoctors.wiki/verify/1/<%= base %>"><img src="https://thedoctors.wiki/images/gutopt.jpeg" alt="" /></a></b></p>
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
