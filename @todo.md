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
description:
details:
company: document.querySelector('.inner #job_employer_name ').innerText
location: document.querySelector('.inner #job_location ').innerText
benefits:

//////////////////////////////////////////////////////////////////////////////

HNHIRING

date:
skills:
requirements:
title: document.querySelector('#content .body').innerText.split('\n')[0]
type: job / freelance
payment: fixed / per hour
duration:
budget:
description: document.querySelector('#content .body').innerText
details:
company:
location:
benefits:

//////////////////////////////////////////////////////////////////////////////

JOBMOTE - https://jobmote.com/jobs/search?q=javascript

date:
skills:
requirements:
title: document.querySelector('.container h1').innerText
type: job / freelance
payment: fixed / per hour
duration:
budget:
description: document.querySelector('.container .description').innerText
details:
company: document.querySelector('.container h4').innerText
location:
benefits:

//////////////////////////////////////////////////////////////////////////////

GITHUB - jobs.github.com/positions?description=JavaScript

date:
skills:
requirements:
title: document.querySelector('#page h1').innerText
type: document.querySelector('#page .supertitle').innerText.split(' /')[0]
payment: fixed / per hour
duration:
budget:
description: document.querySelector('#page .column').innerText
details:
company:
location: document.querySelector('#page .supertitle').innerText.split('/')[1]
benefits:

//////////////////////////////////////////////////////////////////////////////

REMOTIVE -

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
description:
details:
company: document.querySelector('.job-entry .author').innerText.split('(')[0]
location:
benefits:

//////////////////////////////////////////////////////////////////////////////

JRDEVJOBS - https://www.jrdevjobs.com/jobs#query=remote&page=1

date: document.querySelector('.container .date').innerText
skills: document.querySelectorAll('.container .job-badge-wrapper .badge')[2].innerText
requirements: document.querySelectorAll('.container .job-badge-wrapper .badge')[3].innerText
title: document.querySelector('.job-header .job-position').innerText
type: document.querySelectorAll('.container .job-badge-wrapper .badge')[1].innerText
payment: fixed / per hour
duration:
budget:
description:
details:
company: document.querySelector('.job-header .job-company').innerText
location: document.querySelectorAll('.container .job-badge-wrapper .badge')[0].innerText
benefits:

//////////////////////////////////////////////////////////////////////////////

JSJOBS - http://jsjobs.org/?q=remote&p=1

date:
skills:
requirements:
title: document.querySelector('#job-content .jobtitle').innerText
type: job / freelance
payment: fixed / per hour
duration:
budget:
description: document.querySelector('#job-content #job_summary').innerText
details:
company: document.querySelector('#job-content .company').innerText
location: document.querySelector('#job-content .location').innerText
benefits:

//////////////////////////////////////////////////////////////////////////////

YCOMBINATOR - http://jsjobs.org/?q=remote&p=1

date: document.querySelector('.default .age').innerText
skills:
requirements:
title: document.querySelector('.comment').innerText.split('\n')[0]
type: job / freelance
payment: fixed / per hour
duration:
budget:
description:
details:
/*
function (){
  var array = document.querySelector('.comment').innerText.split('\n')
  array.shift()
  array.join(' ')
  return array
}
*/
company:
location:
benefits:

//////////////////////////////////////////////////////////////////////////////

PEOPLE PER HOUR - https://www.peopleperhour.com/freelance-jobs

date: document.querySelector('.main-content .info').innerText.split('PROPOSALS')[0]
skills:
requirements:
title: document.querySelector('.main-content h1').innerText
type: job / freelance
payment: document.querySelector('.job-stats').innerText.split('\n')[5]
duration:
budget: document.querySelector('.job-stats').innerText.split('\n')[6]
description: document.querySelector('.job-details .project-description').innerText
details:
company:
location:
benefits:

//////////////////////////////////////////////////////////////////////////////

REDDIT

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

REMOTEES - http://remotees.com/

date: document.querySelector('.center .single-company').innerText.split(' · ')[1]
skills:
requirements:
title: document.querySelector('.center h1').innerText
type: job / freelance
payment: fixed / per hour
duration:
budget:
description: document.querySelector('.center .single-text').innerText
details:
company: document.querySelector('.center .single-company').innerText.split(' · ')[0]
location:
benefits:

//////////////////////////////////////////////////////////////////////////////

REMOTEOK - https://remoteok.io/remote-jobs

date:
skills: document.querySelector('.tags').innerText
requirements:
title: document.querySelector('.company_and_position').innerText.split('\n')[0]
type: job / freelance
payment: fixed / per hour
duration:
budget:
description: document.querySelector('.description p').innerText
details:
company: document.querySelector('.company_and_position').innerText.split('\n')[1]
location:
benefits:

```
