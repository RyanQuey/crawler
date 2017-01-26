# crawler
crawl the web for remote work

# usage

1. encode `url` into `filename` by
  * removing `http://` or `https://`
  * changing all `.` into `@`
  * changing all `/` into `@@`
  * changing all `?` into `!__!`
  * add `.js` at the end
  * example: `http://example.com/foo/bar?baz=123`
    * becomes `example@com@@foo@@bar!__1baz=123.js`
2. save scraper under `./source/pages/${filename}`
3. use `npm start [urlFragment]` to scrape
  * `urlFragment` (not `filenameFragment`) is matched against all available url's
  * every match found will be part of the SET of urls that will be scraped
  * see `./source/pages` for all available urls by converting filenames
  * according to above rules :-)

```bash
npm start # scrapes all `./source/pages`
# or
npm start -- urlFragment1 urlFragment2 ...
# or
npm start urlFragment1 urlFragment2 ...
```

# TODO
* @TODO: try gigs

------------------------------------------------
------------------------------------------------
------------------------------------------------

# REMOTE Javascript

## Freelance gigs (and jobs)     

http://jsjobs.org/?q=remote&p=1 `remote` `freelance` `ok` `javascript`
  > scrapes from `indeed.com`

http://www.careerbuilder.com/jobs-javascript-remote?keywords=javascript+remote&location= `remote` `freelance` `javascript` `ok`

https://www.reddit.com/r/javascript_jobs/ `freelance` `remote` `ok` `javascript`

https://news.ycombinator.com/item?id=13301833 `freelance` `remote` `javascript` `ok`

http://jobs.smashingmagazine.com/freelance `freelance` `javascript` `ok` `remote`

https://remoteok.io/remote-web-dev-jobs `remote` `javascript``freelance` `jobs` `ok`

http://frontenddeveloperjob.com/ `remote` `freelance` `jobs` `ok`

https://www.bountysource.com/ `remote` `freelance` `ok`

http://www.freelancermap.com/index.php?module=projekt&func=suchergebnisse&pq=javascript&profisuche=0&pq_sorttype=1&area=newpb&redirect=1 `remote` `freelance`

https://www.cwjobs.co.uk/jobs/remote/in-london `jobs` `remote` `freelance` `javascript`  

http://www.careerbuilder.com/jobs-javascript-remote?keywords=javascript+remote&location= `remote` `freelance` `javascript` `ok`

https://www.wfh.io/latest-remote-jobs `remote` `jobs` `freelance`

https://www.peopleperhour.com/freelance-jobs?category=36&ref=categories `remote` `freelance` `ok` `javascript`

https://remoteworkhub.com/results/?category=software-application-development&type=&location=anywhere-worldwide `remote` `jobs` `freelance` `javascript`

http://www.idealist.org/search/v2/?qs=QlpoOTFBWSZTWan7ZN8AAFGfgAMAMAIBAAAAuvf_oCAAkCjQ0AAAAyJqek9I9SDDTU0vp5lKNmHfdKrkI9HK47Siob4_XcVJpzfgY2qTq-49UJYfVNpmOgliXgw4jXZwvUNsNERCqjPsJCjMRjQUaAsHUWJhpwHqkiuCFTwfJYWnlltDCX48WXWo3t_F3JFOFCQqftk3wA== `remote` `freelance` `ok`
// can't remote click the filters

https://www.upwork.com/o/jobs/browse/?q=javascript# `api` `remote` `jobs` `freelance` `ok` `javascript` // use APIs

http://www.guru.com/d/jobs/q/javascript/ `freelance` `javascript` `remote` `ok` //need to be signed in

http://www.simplyhired.com/k-remote-web-developer-jobs.html `jobs` `freelance` `remote` `ok` `javascript` //error: see the file simplyhired@com...js

---

### Jobs  

https://weworkremotely.com/jobs/search?term=javascript `api` `remote` `javascript` `jobs`

https://www.workingnomads.co/remote-javascript-jobs `remote` `jobs` `javascript` `ok`

https://jobs.github.com/positions?description=JavaScript `remote` `jobs` `ok` `javascript`

https://www.reddit.com/r/remotejs/ `remote` `javascript` `ok`

https://authenticjobs.com/#onlyremote=1 `remote` `jobs` `javascript` //working but not clicking LoadMore

http://jobmote.com/  `remote` `jobs` `javascript` `ok`

https://whoishiring.io/search/45.164/-101.030/2/?search=javascript&remote=true&location=remote `remote` `jobs` `ok` `javascript` //need to overwrite with window.open

https://www.jrdevjobs.com/jobs#query=remote&page=1 `jobs` `javascript` `remote` `ok` `junior`

---   

## Not so much JavaScript

https://jobspresso.co/browsejobs/#s=1 `remote` `jobs`

https://landing.jobs/offers/?page=1&s=featured&full_remote=true&s_l=0&s_h=100&t_co=false&t_st=false `jobs` `remote`

http://jobs.remotive.io/ `jobs` `remote`

https://www.wfh.io/ `jobs` `remote` `ok`

https://whereverjobs.com/listing/1017/spectacular-javascript-desktop-engineer `remote` `jobs` `ok`

http://www.skipthedrive.com/jobs/?search=web `remote` `jobs`

https://www.virtualvocations.com/jobs/c-live+anywhere+in+u.s. `jobs` `remote`

https://authenticjobs.com/#category=4&onlyremote=1 `remote` `ok`

https://dribbble.com/jobs?utf8=%E2%9C%93&anywhere=true&location=Anywhere `jobs` `remote`

https://www.themuse.com/jobs?keyword%5B%5D=javascript%20remote&filter=true `jobs` `remote`

http://jobs.ethercasts.com/ `remote` `jobs` `ok` `api`

https://remotebase.io/companies `jobs` `remote` `ok`

https://remote.co/remote-jobs/developer/ `remote` `jobs`

https://www.cybercoders.com/jobs/remote-javascript-developer-jobs/ `remote` `jobs`

http://stackoverflow.com/jobs?sort=i&q=javascript&r=true `remote` `jobs`

https://www.linkedin.com/jobs/remote-developer-jobs?country=gb `jobs` `remote`

http://www.careerjet.co.uk/remote-programmer-jobs.html `remote` `jobs`

https://remotejobs.com/ `remote` `job`

https://www.flexjobs.com/search?search=javascript+remote&old=1&jobtype=&schedule=&category=&state=&flex= `remote` `jobs` `javascript` `ok`

https://www.glassdoor.de/Job/remote-javascript-jobs-SRCH_IL.0,6_IS11047_KO7,17.htm?suggestChosen=false&jobType=all&typedKeyword=javascript&locT=S&sc.keyword=javascript&clickSource=searchBtn&locId=11047&suggestCount=0&countryRedirect=true `jobs` `remote` `javascript`

https://remotebase.io/companies `api` `jobs` `remote`

https://twitter.com/intent/follow?original_referer=http%3A%2F%2Fremotejobs.io%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=remote_jobs&tw_p=followbutton `remote` `jobs`

https://stackoverflow.com/jobs?searchTerm=javascript&allowsremote=true `remote` `jobs` `ok`

https://stackoverflow.com/jobs/remote-developer-jobs `remote` `jobs`

http://www.candoerz.com/ `jobs` `remote`  

---

### `remote` `javascript` `jobs`

https://weworkremotely.com/jobs/search?term=javascript `api` `remote` `javascript` `jobs`

https://www.workingnomads.co/remote-javascript-jobs `remote` `jobs` `javascript` `ok`

https://jobs.github.com/positions?description=JavaScript `remote` `jobs` `ok` `javascript`

https://www.reddit.com/r/remotejs/ `remote` `javascript` `ok`

https://authenticjobs.com/#onlyremote=1 `remote` `jobs` `javascript`

http://jobmote.com/  `remote` `jobs` `javascript` `ok`

https://whoishiring.io/search/45.164/-101.030/2/?search=javascript&remote=true&location=remote `remote` `jobs` `ok` `javascript`

https://www.jrdevjobs.com/jobs#query=remote&page=1 `jobs` `javascript` `remote` `ok` `junior`

---   

## `remote` `jobs`

https://jobspresso.co/browsejobs/#s=1 `remote` `jobs`

https://landing.jobs/offers/?page=1&s=featured&full_remote=true&s_l=0&s_h=100&t_co=false&t_st=false `jobs` `remote`

http://jobs.remotive.io/ `jobs` `remote`

https://www.wfh.io/ `jobs` `remote` `ok`

https://whereverjobs.com/listing/1017/spectacular-javascript-desktop-engineer `remote` `jobs` `ok`

http://www.skipthedrive.com/jobs/?search=web `remote` `jobs`

https://www.virtualvocations.com/jobs/c-live+anywhere+in+u.s. `jobs` `remote`

https://authenticjobs.com/#category=4&onlyremote=1 `remote` `ok`

https://dribbble.com/jobs?utf8=%E2%9C%93&anywhere=true&location=Anywhere `jobs` `remote`

https://www.themuse.com/jobs?keyword%5B%5D=javascript%20remote&filter=true `jobs` `remote`

http://jobs.ethercasts.com/ `remote` `jobs` `ok` `api`

https://remotebase.io/companies `jobs` `remote` `ok`

https://remote.co/remote-jobs/developer/ `remote` `jobs`

http://www.idealist.org/search/v2/?qs=QlpoOTFBWSZTWan7ZN8AAFGfgAMAMAIBAAAAuvf_oCAAkCjQ0AAAAyJqek9I9SDDTU0vp5lKNmHfdKrkI9HK47Siob4_XcVJpzfgY2qTq-49UJYfVNpmOgliXgw4jXZwvUNsNERCqjPsJCjMRjQUaAsHUWJhpwHqkiuCFTwfJYWnlltDCX48WXWo3t_F3JFOFCQqftk3wA== `remote` `freelance` `ok`

https://www.cybercoders.com/jobs/remote-javascript-developer-jobs/ `remote` `jobs`

http://stackoverflow.com/jobs?sort=i&q=javascript&r=true `remote` `jobs`

https://www.linkedin.com/jobs/remote-developer-jobs?country=gb `jobs` `remote`

http://www.careerjet.co.uk/remote-programmer-jobs.html `remote` `jobs`

https://remotejobs.com/ `remote` `job`

https://www.flexjobs.com/search?search=javascript+remote&old=1&jobtype=&schedule=&category=&state=&flex= `remote` `jobs` `javascript` `ok`

https://www.glassdoor.de/Job/remote-javascript-jobs-SRCH_IL.0,6_IS11047_KO7,17.htm?suggestChosen=false&jobType=all&typedKeyword=javascript&locT=S&sc.keyword=javascript&clickSource=searchBtn&locId=11047&suggestCount=0&countryRedirect=true `jobs` `remote` `javascript`

https://remotebase.io/companies `api` `jobs` `remote`

https://twitter.com/intent/follow?original_referer=http%3A%2F%2Fremotejobs.io%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=remote_jobs&tw_p=followbutton `remote` `jobs`

https://stackoverflow.com/jobs?searchTerm=javascript&allowsremote=true `remote` `jobs` `ok`

https://stackoverflow.com/jobs/remote-developer-jobs `remote` `jobs`

https://www.wfh.io/latest-remote-jobs `remote` `jobs` `freelance`

http://www.candoerz.com/ `jobs` `remote`

https://www.cwjobs.co.uk/jobs/remote/in-london `jobs`


# `jobs`

http://freshjobs.ch/ `jobs` `deutsch`

http://codepen.io/jobs/ `jobs` `javascript`

https://angel.co/jobs `jobs`

https://coderwall.com/jobs `jobs`

http://www.awwwards.com/jobs/ `jobs`

http://workinstartups.com/ `jobs`

https://angel.co/jobs `jobs`

https://twitter.com/GitHubJobs `jobs`

https://www.dice.com/ `jobs` `freelance`

https://twitter.com/StackDevJobs `jobs`

https://www.monster.com/jobs/search/Part-Time_8?q=javascript-remote&kwdv=2193 `freelance` `jobs` `javascript` `ok`
---

# Other (not jobs)
https://remote.co/qa-leading-remote-companies/operating-remotely/ `article`

https://workfrom.co/ `coworking`

https://www.flexjobs.com/international/United-Kingdom-telecommuting-jobs `not for developers`

https://github.com/jessicard/remote-jobs `listing of companies`

https://github.com/hugo53/awesome-RemoteWork `listing of remote job platforms` `copied`

https://github.com/sourceful/jobs `listing of remote job platforms`

https://github.com/lukasz-madon/awesome-remote-job `listing of remote job platforms`

https://www.skillshare.com/ `e-learning platform`

https://www.livecoding.tv/ `e-learning platform`

https://www.codementor.io/gigs/web-development-services `e-learning platform` `hire me`

http://europeremotely.com/ `newsletter`

https://www.honeypot.io/  `direct job offers`

http://remotus.com/ `direct job offers`

http://www.teamed.io/ `direct job offers`

https://www.awesomeweb.com/ `direct job offers`

https://twitter.com/remotejs?lang=en `dead links`

https://authenticjobs.com/pricing `charging for job posting`

https://twitter.com/freelancer_INT `tips for freelancers`

https://www.reddit.com/r/forhire/  `hire me`

https://www.toptal.com/ `agency for top 3% freelance talent`

https://remotecoder.io/ `in hibernation`

https://www.freecodecamp.com/how-nonprofit-projects-work `freecodecamp job preparation`

https://twitter.com/search?q=%23remotejob%20%23javascript&src=typd `feed with many resources for JS remote jobs`
