# OPEN TODOS:

```js

data = {
  date:
  skills:
  requirements:
  title:
  type: job / freelance
  payment: fixed / per hour
  duration:
  budget:
  description:
  details:
  company:
  location:
  benefits:
}

//////////////////////////////////////////////////////////////////////////////


FRONTEND DEVELOPER JOB - http://frontenddeveloperjob.com/

date: document.querySelector('.minihead ').innerText.split("— ")[1]
skills:
requirements:
title: document.querySelector('.inner #job_title ').innerText
type: document.querySelector('.inner #job_type ').innerText
payment: fixed / per hour
duration:
budget:
description: (document.querySelector('#job_body')||{}).innerText||'',
details:
company: document.querySelector('.inner #job_employer_name ').innerText
location: document.querySelector('.inner #job_location ').innerText
benefits:

//////////////////////////////////////////////////////////////////////////////

HNHIRING

date: null,
skills: null,
requirements: null,
title: document.querySelector('#content .body').innerText.split('\n')[0],
type: null,
payment: null,
duration: null,
budget: null,
description: document.querySelector('#content .body').innerText,
details: null,
company: null,
location: null,
benefits: null

//////////////////////////////////////////////////////////////////////////////

JOBMOTE - https://jobmote.com/jobs/search?q=javascript

date: null,
skills: null,
requirements: null,
title: document.querySelector('.container h1').innerText,
type: null,
payment: null,
duration: null,
budget: null,
description: document.querySelector('.container .description').innerText,
details: null,
company: document.querySelector('.container h4').innerText,
location: null,
benefits: null

//////////////////////////////////////////////////////////////////////////////

GITHUB - jobs.github.com/positions?description=JavaScript

date: null,
skills: null,
requirements: null,
title: document.querySelector('#page h1').innerText,
type: document.querySelector('#page .supertitle').innerText.split(' /')[0],
payment: null,
duration: null,
budget: null,
description: document.querySelector('#page .column').innerText,
details: null,
company: null,
location: document.querySelector('#page .supertitle').innerText.split('/')[1],
benefits: null

//////////////////////////////////////////////////////////////////////////////

REMOTIVE -

// PROBLEM: links out to other pages
date:
skills:
requirements:
title:
type: job / freelance
payment: fixed / per hour
duration:
budget:
description:
details:
company:
location:
benefits:

//////////////////////////////////////////////////////////////////////////////

SMASHING - http://jobs.smashingmagazine.com/freelance

date: document.querySelector('.job-entry .date').innerText
skills:
requirements:
title: document.querySelector('.job-entry h2').innerText
type: document.querySelector('.job-entry .tags').innerText
payment: fixed / per hour
duration:
budget:
description: [...document.querySelectorAll('.job-entry p')].map(x => x.innerText||'').join('\n'),
details:
company: document.querySelector('.job-entry .author').innerText.split('(')[0]
location:
benefits:

//////////////////////////////////////////////////////////////////////////////

JRDEVJOBS - https://www.jrdevjobs.com/jobs#query=remote&page=1

date: document.querySelector('.container .date').innerText,
skills: document.querySelectorAll('.container .job-badge-wrapper .badge')[2].innerText,
requirements: document.querySelectorAll('.container .job-badge-wrapper .badge')[3].innerText,
title: document.querySelector('.job-header .job-position').innerText,
type: document.querySelectorAll('.container .job-badge-wrapper .badge')[1].innerText,
payment: null,
duration: null,
budget: null,
description: null,
details: null,
company: document.querySelector('.job-header .job-company').innerText,
location: document.querySelectorAll('.container .job-badge-wrapper .badge')[0].innerText,
benefits: null

//////////////////////////////////////////////////////////////////////////////

JSJOBS - http://jsjobs.org/?q=remote&p=1

date: null,
skills: null,
requirements: null,
title: document.querySelector('#job-content .jobtitle').innerText,
type: null,
payment: null,
duration: null,
budget: null,
description: document.querySelector('#job-content #job_summary').innerText,
details: null,
company: document.querySelector('#job-content .company').innerText,
location: document.querySelector('#job-content .location').innerText,
benefits: null

//////////////////////////////////////////////////////////////////////////////

YCOMBINATOR - http://jsjobs.org/?q=remote&p=1

date: document.querySelector('.default .age').innerText,
skills: null,
requirements: null,
title: document.querySelector('.comment').innerText.split('\n')[0],
type: null,
payment: null,
duration: null,
budget: null,
description: null,
details: document.querySelector('.comment').innerText.split('\n').map(x => {
  x.shift()
  return x.join(' ')
}),
company: null,
location: null,
benefits: null

//////////////////////////////////////////////////////////////////////////////

PEOPLE PER HOUR - https://www.peopleperhour.com/freelance-jobs

date: document.querySelector('.main-content .info').innerText.split('PROPOSALS')[0],
skills: null,
requirements: null,
title: document.querySelector('.main-content h1').innerText,
type: null,
payment: document.querySelector('.job-stats').innerText.split('\n')[5],
duration: null,
budget: document.querySelector('.job-stats').innerText.split('\n')[6],
description: document.querySelector('.job-details .project-description').innerText,
details: null,
company: null,
location: null,
benefits: null

//////////////////////////////////////////////////////////////////////////////

REDDIT

// PROBLEM: links out to other pages

date: null,
skills: null,
requirements: null,
title: null,
type: null,
payment: null,
duration: null,
budget: null,
description: null,
details: null,
company: null,
location: null,
benefits: null

//////////////////////////////////////////////////////////////////////////////

REMOTEES - http://remotees.com/

date: document.querySelector('.center .single-company').innerText.split(' · ')[1],
skills: null,
requirements: null,
title: document.querySelector('.center h1').innerText,
type: null,
payment: null,
duration: null,
budget: null,
description: document.querySelector('.center .single-text').innerText,
details: null,
company: document.querySelector('.center .single-company').innerText.split(' · ')[0],
location: null,
benefits: null

//////////////////////////////////////////////////////////////////////////////

REMOTEOK - https://remoteok.io/remote-jobs

date: null,
skills: document.querySelector('.tags').innerText,
requirements: null,
title: document.querySelector('.company_and_position').innerText.split('\n')[0],
type: null,
payment: null,
duration: null,
budget: null,
description: document.querySelector('.description p').innerText,
details: null,
company: document.querySelector('.company_and_position').innerText.split('\n')[1],
location: null,
benefits: null

//////////////////////////////////////////////////////////////////////////////

REMOTE WORK HUB - https://remoteworkhub.com/results/?category=software-application-development&type=&location=anywhere-worldwide

date: document.querySelector('.devided_section').innerText.split('POSTED:')[1].split('LOCATION')[0],
skills:
/*
var nodes = document.querySelectorAll('.job-categories-list li')
var skills = []
nodes.forEach(function (li) {
  skills.push(li.innerText)
})
return skills
*/
requirements: null,
title: document.querySelector('.main_title').innerText,
type: document.querySelector('.job-type').innerText,
payment: null,
duration: null,
budget: null,
description: document.querySelector('.job_summary').innerText,
details: null,
company: null,
location: null,
benefits: null
//////////////////////////////////////////////////////////////////////////////

SIMPLY HIRED - http://www.simplyhired.com/search?q=remote+web+developer&fdb=30

// PROBLEM: links out to other pages

date: null,
skills: null,
requirements: null,
title: null,
type: null,
payment: null,
duration: null,
budget: null,
description: null,
details: null,
company: null,
location: null,
benefits: null
//////////////////////////////////////////////////////////////////////////////

WE WORK REMOTELY - https://weworkremotely.com/categories/2-programming/jobs#intro

date: document.querySelector('.listing-header h3').innerText,
skills: null,
requirements: null,
title: document.querySelector('.listing-header h1').innerText,
type: null,
payment: null,
duration: null,
budget: null,
description: document.querySelector('.listing-container').innerText,
details: null,
company: document.querySelector('.listing-header h2').innerText.split('\n')[0],
location: null,
benefits: null
//////////////////////////////////////////////////////////////////////////////

WFH  - https://www.wfh.io/categories/1-remote-software-development/jobs

date: document.querySelectorAll('.panel-body')[2].innerText.split('Posted')[1].split('Description')[0],
skills: null,
requirements: null,
title: document.querySelector('.page-header h1').innerText.split('@')[0],
type: null,
payment: null,
duration: null,
budget: null,
description: document.querySelectorAll('.panel-body')[2].innerText.split('Description')[1],
details: null,
company: document.querySelector('.page-header h1').innerText.split('@')[1],
location: null,
benefits: null

//////////////////////////////////////////////////////////////////////////////

WORKING NOMADS - https://www.workingnomads.co/remote-javascript-jobs

date: document.querySelector('.job-apply').innerText,
skills: document.querySelector('.parameters').innerText.split('\n')[1].split('Tags:')[1],
requirements: null,
title: document.querySelector('.container h3').innerText,
type: null,
payment: null,
duration: null,
budget: null,
description: document.querySelector('.job-description').innerText,
details: null,
company: document.querySelector('.parameters').innerText.split('\n')[0],
location: null,
benefits: null

```
