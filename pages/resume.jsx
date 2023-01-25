import React from "react"
import { Link } from "react-router-dom"
import Mandelbrot from "../Mandelbrot.jsx"

export default () => (
  <div>
    <h1>
      <Link to="/helloworld">Landon Kuhn</Link>
    </h1>
    <p>
      <a href="mailto://landon9720@gmail.com">landon9720@gmail.com</a>
      {" • "}
      <Link to="/portland">Portland, Oregon, USA</Link>
      {" • "}
      971-645-5501{" • "}
      <Link to="/landon9720">landon9720.com</Link>
    </p>
    <h2>Introduction</h2>
    <p>
      I design, implement, and operate applications of software technology. I am
      trained in business, and am passionate about delivering value in the form
      of deployed, supported, and continuously improving software systems. I am
      an expert programmer, with a lifetime of experience, driven by genuine
      passion for Information Technology.
    </p>
    <p>
      I work with customers and their proxies to derive and prioritized
      requirements. I design, document, and socialize implementation options
      before I write code. I derive deliverable work tasks, which I implement in
      full or as part of a team. I support and mentor stakeholders and team
      members. I operate and manage infrastructure. I have significant
      experience in the domain of web applications and services, and I am a
      multiskilled IT professional.
    </p>
    <p>
      My programming practices include iterative development, unit and
      functional testing, dependency injection, clean code, continuous
      integration, infrastructure-as-code, functional programming, and
      observability. Every day I use Chrome, Git, IDEA, and Visual Studio Code.
      My programming hobbies include simulations, 2D graphics, genetic
      algorithms, and computer-generated music. I am a husband, and father of
      teens.
      <span className="no-print">
        {" "}
        When not at work, I <a href="https://landon9720.bandcamp.com">
          make
        </a>{" "}
        <a href="https://soundcloud.com/landon9720">music</a>. Please see my{" "}
        <Link to="tech">technology list</Link>, and visit me on{" "}
        <a href="https://stackoverflow.com/users/1785/landon-kuhn">
          StackOverflow
        </a>
        , <a href="https://github.com/landon9720">GitHub</a>, and{" "}
        <a href="https://www.linkedin.com/in/landonkuhn">LinkedIn</a>.
      </span>
    </p>
    <h2>Work Experience</h2>
    <h3>
      <a href="https://www.thatdot.com">thatDot</a> • Senior Software Engineer •
      2021-2022
    </h3>
    <blockquote>
      thatDot is a graph database with innovative features such as integration
      with streaming data sources.
    </blockquote>
    <p>
      Designed, implemented, and supported product features, and improved
      quality, stability, and scalability. (Scala, Akka, Akka Streams, Alpakka,
      endpoints4s). Projects include:
    </p>
    <ol>
      <li>
        Developed "Recipe", a YAML file that implements a thatDot use-case.
        Recipes are descriptions of how to read records from sources, and
        include how to transform and write records to the persistent graph data
        model, and how to query and output records to destinations.
      </li>
      <li>
        Added data sources and sinks, including UNIX named pipes, and AWS
        Kinesis.
      </li>{" "}
      <li>
        Added Cypher language features, including variable length pattern
        matching, support for regular expressions, and functions for time
        modelling and indexing.
      </li>
      <li>
        Developed product integration test that drives scenarios, measure
        performance, and assert correctness.
      </li>
      <li>
        Implemented multipart snapshots for unlimited record sizes despite
        underlying store limitations.
      </li>
    </ol>
    <h3>
      <a href="https://formant.io">Formant</a> • Senior Software Engineer •
      2018-2021
    </h3>
    <blockquote>
      Formant is a platform that connects robots and people, offering data
      collection, visualization, and controls. Its web application includes
      telemetry data visualization and export, fleet management, user comments
      and annotations, and integration with external services.
    </blockquote>
    <p>Built and supported product features:</p>
    <ol>
      <li>
        Improved data ingestion to leverage realtime stream processing (Kinesis,
        Kafka) to improve web service performance and system scalability, and to
        implement data aggregation and export to S3 (TypeScript, NodeJS).
      </li>
      <li>
        Implemented Annotations feature, which allow robot telemetry to be
        augmented with user input, and associated with records in external
        systems (Google Sheets). Implemented frontend data collection and
        configuration components (React), visualization and interaction with
        time-series data (SVG), APIs (TypeScript, NodeJS), database modeling and
        optimization (PostgreSQL).
      </li>
      <li>
        Implemented Fleets feature to organize robot data, including data
        models, APIs, configuration pages and frontend integration. Implemented
        Fleet dashboard, which is a realtime display of robot metrics. Project
        work included frontend, APIs, data model, and background data processing
        (React, TypeScript, NodeJS, Kafka, PostgreSQL).
      </li>
      <li>
        Implemented Commands, which allows messages to be sent from Formant
        cloud to robots, are used to invoke custom behavior, and are triggered
        manually or by evaluation of ingested robot telemetry. Implemented data
        models, APIs, and frontend for configuring, sending, and reviewing
        Commands.
      </li>
      <li>
        Implemented infrastructure observability improvements: collection of
        metrics, and integration external services (CloudWatch, DataDog). Allow
        monitoring for system failures identification of performance hotspots.
        Includes continuous automated integration testing of full application
        stack.
      </li>
      <li>
        Integrated Formant telemetry data with downstream services to support
        analytics (S3, Athena). Developed and supported custom reports and
        dashboards for Formant customers (Looker, Tableau).
      </li>
    </ol>
    <h3>
      <a href="https://sunsama.com">Sunsama</a> • Software Architect • 2017-2018
    </h3>
    <blockquote>
      Sunsama is a unique team task management application. In 15 months, our
      team of 4 created a unique software product with an active and growing
      user base.
    </blockquote>
    <p>Developed and operated the entire software stack, including:</p>
    <ol>
      <li>
        User interface, with real time reactivity across all connected browsers
        (React, GraphQL, NodeJS, Meteor, Chrome)
      </li>
      <li>Back-end services (Meteor, Web Sockets, MongoDB, AWS SQS)</li>
      <li>API integration (Google Calendar, OAuth)</li>
      <li>Native desktop application (Electron)</li>
      <li>
        Infrastructure, build, and deployment (AWS, EC2, ECS, CloudWatch,
        Terraform, Jenkins, Docker, Bash)
      </li>
    </ol>
    <h3>
      <a href="http://mobilerq.com">MobileRQ</a> • Software Architect •
      2015-2017
    </h3>
    <blockquote>
      MobileRQ enables targeted content delivery and push notifications for
      mobile and web applications. MobileRQ was acquired by{" "}
      <a href="http://kochava.com">Kochava</a> in 2017.
    </blockquote>
    <p>
      Developed, operated, and supported MobileRQ's software products, including
      web applications and services on AWS, and iOS SDK. Responsibilities
      included all aspects of the software stack:
    </p>
    <ol>
      <li>User interface (HTML, CSS, jQuery, Bootstrap)</li>
      <li>Front-end API (Java, AWS Elastic Beanstalk)</li>
      <li>
        Data storage and transform (Scala, Apache Spark, RDS/PostgreSQL,
        DynamoDB, S3)
      </li>
    </ol>
    <p>Implemented major features and improvements including:</p>
    <ol>
      <li>
        Distributed matching engine that evaluates customer-defined predicates
        with customer data (Scala, Apache Ignite)
      </li>
      <li>
        Architectural refractors, resulting in order-of-magnitude cost saving
        and reliability improvement (Scala, AWS Kinesis, AWS DynamoDB)
      </li>
    </ol>
    <h3>Janrain • Software Architect • 2013-2015</h3>
    <blockquote>
      Janrain provided social identity and user profile management services for
      web sites and mobile applications.
    </blockquote>
    <p>
      Designed and implemented of services for managing configuration data,
      featuring a DSL for modeling and transforming data over a graph database
      with compile-time correctness guarantees. (Scala)
    </p>
    <p>
      Built analytics products that leverage user profile and event data data.
      My responsibilities included architecture, vendor evaluations, and project
      planning and leadership. Implemented ETL, data access, and visualization
      (Scala, Apache Spark, AWS EMR, S3, AWS Redshift, SQL).
    </p>
    <h3>
      <a href="http://marinsoftware.com">Marin Software</a> • Senior Engineer •
      2012
    </h3>
    <blockquote>
      Marin Software allows advertisers to manage online marketing campaigns
      across a variety of publishers, including Google and Facebook.
    </blockquote>
    <p>
      Developed search features and performance improvements. Developed a data
      pipeline for asynchronously joining search and aggregate data in the
      front-end web application. (Java, JavaScript)
    </p>
    <p>
      Built backend microservice for managing customer records. (DropWizard)
    </p>
    <h3>ClearAccess Inc. • Senior Engineer • 2009-2012</h3>
    <blockquote>
      ClearAccess provided Auto-Configuration Server (ACS) software and
      customer-premises equipment (CPE) firmware to deliver flexible and
      scalable device and application management based on the Broadband Forum's
      TR-069 standard. ClearAccess was acquired by Cisco Systems in March 2012.
    </blockquote>
    <p>
      Team member developing web application backend and frontend, including:
    </p>
    <ol>
      <li>
        Data models, web services, and front end user interface for management
        of wireless access points, cable and DSL modems, and NAT devices (Scala,
        Java, Tomcat, MySQL, PostgreSQL, Hibernate)
      </li>
      <li>
        Implementation of TR-069, the protocol used to manage customer-premises
        equipment (Scala, Java, Tomcat, HTTP, XML), and end-user extensibility
        (Java/JavaScript)
      </li>
      <li>
        Search and reporting features, including data indexing engine, custom
        query language, with text parser and user interface (Scala, Solr)
      </li>
    </ol>
    <h3>
      <a href="http://qualcomm.com">QUALCOMM</a>, Inc. • Senior Engineer •
      2001-2009
    </h3>
    <blockquote>
      Qualcomm designs, manufactures, and markets wireless telecommunications
      products and services based on its CDMA technology, and delivers
      integrated wireless applications and services.
    </blockquote>
    <p>
      Implemented application features used by human drivers of hong-haul
      tractor-trailers. Developed applications for real-time monitoring of
      freight. Created algorithms for processing driver logs according to FMCSA
      Hours-of-Service regulations. Worked with position data, map
      visualization, geofencing, and SMS alerts. Maintained and responsible for
      build automation for multi-platform product SDK. These projects provided
      abundant opportunities for learning and growth. (C, C++, C#, Windows CE,
      Windows CE.NET, ASP.NET, Java, Perl, Python)
    </p>
    <p>
      Supported IT infrastructure for Portland office, including workstations
      for 50+ employees, on-premises servers, and LAN, WAN, and
      telecommunications equipment.
    </p>
    <h2>Education</h2>
    <h3>
      <a href="http://pdx.edu">Portland State University</a>
      {" • "}
      <a href="https://www.pdx.edu/business">The School of Business</a>
      {" • "}
      Bachelor of Science{" • "}
      Information Systems{" • "}
      Honors{" • "}
      August 2001
    </h3>
    <p>
      Coursework included Unix, C, C++, C#/.NET, SQL, data structures,
      algorithms, computer networking, data modeling, database management,
      business, finance, marketing.
    </p>
    <footer className="no-print">
      <a href="https://github.com/landon9720/resume/blob/master/Mandelbrot.jsx">
        <Mandelbrot />
      </a>
    </footer>
  </div>
)
