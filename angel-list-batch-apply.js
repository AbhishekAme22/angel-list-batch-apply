// This script targets all companies in your search results with a custom note.

// 1. Search Angel List for your location and keywords.
// 2. Paste this script into the console and run it.
// 3. Wait while it works.
// 4. Copy the results from the console for your records.

// You will probably need to run it several times, because it appears to get
// interrupted by Angel List's interspersed 'call to action' buttons in the search
// results. Fortunately, once you apply to a job, it hides from the results.

(function() {

  var placeholderString,
  placeholderWords,
  contactName,
  companyName,
  customNote,
  jobDescription,
  jobUrl,
  jobInfo,
  str = '';

  $('.job_listings')

    .filter(function(_, elem) {
      return ($(elem).attr('data-force-note') );
    })
    .each(function(_, elem) {

      // Find the URL for each job listing.
      $(elem)
          .find('.top a[href]')
          .each( function(idx, value) { str += $(value).attr('href') + "\n"; });

      // Get the placeholder note so we can pluck the names of the contact and company.
      placeholderString = $(elem)
        .find('.interested-note').attr('placeholder');

      // Split placeholder string into words:
      placeholderWords = placeholderString.split(' ');

      // Pluck contact name
      contactName = placeholderWords[4];

      // Pluck company name
      companyName = $(elem).find('.startup-link').text();

      // Build personalized note
      customNote = "Hi " + contactName + "As a passionate and dedicated developer , I am excited about the opportunity to further develop my skills and gain valuable experience through this,With my skills and experience, I believe I would be an excellent fit for your team. I am proficient in Java, JavaScript, Python, PHP, Reactjs, Nodejs,Html,Css, SQL, and DSA, and have knowledge in System Design, API testing, Blockchain, AWS, and Web Security also have several projects under my belt that showcase my skills and abilities.I have completed 2 internships as a backend developer and as a javascript developer ,also I have worked on my own startup as a fullstack developer.I have attached my resume,portfolio links and Certification , which provide more information about my educational background, work experience, and projects I have worked on. You can find my Resume at [https://shorturl.at/ghRV4], my Portfolio at [https://portfolio-44782.web.app], and my 20+ Certification in Software Development, Cloud, Security, and more at [https://shorturl.at/jtT18].My skills and experience have also been recognized by other companies, and I currently have 7 job offers from Accenture ,Maybank and few startups, as well as recently interviewing with Capgemini and IBM.I am confident that my skills, experience, and passion for development will make me a valuable asset to your team, and I am eager to contribute to the success of your projects at " + companyName + ".";
      // .header-info .tagline (text)
      jobDescription = $(elem).find('.tagline').text();

      // .header-info .startup-link (href attr)
      jobUrl = $(elem).find('.startup-link').attr('href');

      // Compile and format job information
      jobInfo = companyName + '\n' + jobDescription + '\n' + str + '\n\n';

      // Get job data for your own records
      console.log(jobInfo);

      // Log out custom note to verify syntax.
      // console.log(customNote + '\n');

      // Add your custom note.
      // *** (Comment these lines out to debug.)
      $(elem)
        .find('.interested-note').text( customNote );

      // Fire in the hole!
      // *** (Comment these lines out to debug.)
      $(elem)
        .find('.interested-with-note-button')
        .each( function(idx, button) { $(button).click(); });

    });

    // Print all of the company and job info to the console.
    return jobInfo;
})();
