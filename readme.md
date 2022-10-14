## Amazon Comprehend Medical Based Web Awareness System

---

## Inspiration

The Internet resembles a maze of information. It's simple to become lost among the misleading medical news being peddled by fake specialists. The search engines that determine the results can influence how people perceive the world. You are capable of falling into a trap of incomplete knowledge, and you most likely have.

Google receives approximately 90% of all queries for search engines, and it gets about 1 billion health-related queries daily. Dr. Google responds to 70,000 queries every minute. No healthcare system in the world provides care to as many people. Even so, its effects on patients' health have never been looked at. When health-related decisions are based on Google searches, we can only make educated guesses about the severity of the negative impacts and costs.

---

## What it does ?

In order to make the user feel secure and not panic about the fake information in case encountered which the algorithm is failing to detect, we have come up with an approach to detect if the user is searching for some medical information and alert him.

---

## How we built it ?

We have cloned the search engine homepage to demonstrate the scenario. On entering the search term, the search term is captured and passed to Amazon Comprehend Medical.

Amazon Comprehend Medical detects and returns useful information in unstructured search text. Amazon Comprehend Medical uses natural language processing (NLP) models to detect entities, which are textual references to medical information such as medical conditions, medications, or Protected Health Information(PHI).Amazon Comprehend Medical also enables users to link these detected entities to standardized medical knowledge bases such as RxNorm and ICD-10-CM through ontology linking operations.

We use Amazon Comprehend Medical to detect if there is medical information in the search text. On detection of the medical disease related text the user is alerted and then redirected to the search results.

---

## Challenges we ran into

- Extracting text in unaltered form through the url on hitting the submit button.
- Establishing a secure connection between the application and Amazon Comprehend Medical.
- Establishing a secure server connection for collection and processing of the data.
- Making decision to alert the users only in the case of medical information detected by Amazon Comprehend Medical.

---

## Accomplishments that we're proud of

We were successful in creating an add-on to the search engines integrating the interface with Amazon Comprehend Medical, which helps users to provide more accurate results and alerts if there is any inaccuracy or sensitive information, so there won't be any misguidance to the user.

---

## What we learned

- Establishing connection between express server and Amazon Comprehend Medical.
- Passing and fetching data from Amazon Comprehend Medical.
- Getting medical insights with accuracy through Amazon Comprehend Medical.
- Solving a real-life problem with AWS services.

---

## What's next for Amazon Comprehend Medical Based Web Awareness System

- Improving the UI.
- Providing more medical insights using multiple features of Amazon Comprehend Medical.
