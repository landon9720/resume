import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className='resume'>
        <h1>
            <Link to="/helloworld">Landon Kuhn</Link>
        </h1>
        <p>
            <a href="mailto://landon9720@gmail.com">landon9720@gmail.com</a>
            <br />
            <Link to="/portland">Portland, Oregon, USA</Link>
            <br />
            971-645-5501<br />
            <Link to="/landon9720">landon9720.com</Link>
            <br />
        </p>
        <p>
            I am currently Software Architect at <a href="http://sunsama.com">Sunsama</a>.
        </p>

        <h2>Summary</h2>
        <p>
            I am a full-stack software engineer experienced in web and mobile application development, web APIs and
            services, data processing, storage, and analytics. I work at all stages of software development:
            requirements, architecture, implementation, test, deployment, operation, monitoring, and support.
        </p>
        <p>
            I develop and operate production software in languages C, C++, C#, Java, JavaScript, Objective-C, and Scala.
            I write for environments including web browsers, Linux, AWS, iOS, and PC.
        </p>
        <p>
            I have experience with many web technologies and frameworks including AJAX, ASP.NET, Bootstrap, ECMAScript
            2015, Guava, HTML, HTTP, JSON, JSP, MVC, PHP, Play, REST, React, SOAP, Servlet, Spray.io, Spring, Tomcat,
            Underscore, XML, jQuery.
        </p>
        <p>
            I store data using MySQL, MSSQL, PostgreSQL, DynamoDB, Redshift, S3, Lucene, and Neo4j. I access and
            transform data using SQL, Apache Spark, Apache Ignite, Amazon EMR, ETL, and MDX. I build data visualizations
            using D3, Google Charts, Google Maps, and Tableau.
        </p>
        <p>
            I have experience operating software in colocation centers, on-premises, and in Amazon Web Services. I use
            AWS products including EC2, Elastic Beanstalk, RDS, CloudWatch, SNS, SQS, S3, DynamoDB, Redshift, Kinesis,
            and EMR.
        </p>
        <p>I have led teams of up to 8 individual contributors.</p>
        <p>
            I practice iterative development, continuous integration, and automated deployment. Other tools I use
            include Visual Studio, Visual Studio Code, Intellij IDEA, Eclipse, ClearCase, Git, Perforce, Subversion,
            JIRA, Trello, Maven, SBT, and Bash.
        </p>
        <p>
            My extracurricular programming interests include simulations, genetic algorithms, and computer-generated
            music.
        </p>

        <h2>Experience</h2>

        <h3>MobileRQ</h3>
        <em>Software Architect - Portland, Oregon - 2015-2017</em>
        <blockquote>
            <a href="http://mobilerq.com">MobileRQ</a> is a platform that enables targeted content delivery and push
            notifications for mobile and web applications. MobileRQ was acquired by{' '}
            <a href="http://kochava.com">Kochava</a> in 2017.
        </blockquote>
        <p>
            I developed, operated, and supported MobileRQ's software products, including web applications and services
            on AWS, and SDKs for iOS and Android. My responsibilities included all aspects of the software stack,
            including front-end (jQuery, Bootstrap), web tier (Spring MVC/Jersey), data stores (RDS/DynamoDB/S3), and
            ETL (SQL/Spark). I worked with Scala, Java, and Amazon Web Services daily. I implemented major features and
            improvements including:
        </p>
        <ol>
            <li>
                A distributed matching engine built on Apache Ignite that evaluates customer-defined predicates with
                customer data. Customer data features are defined using composed hierarchies of monadic transformations.
                Customer predicates are evaluated in real-time using distributed data flow and compute architecture.
                This implementation allows MobileRQ to meet a diversity of customer businesses and use-cases.
            </li>
            <li>Architectural refractors, resulting in order-of-magnitude cost saving and reliability improvement.</li>
        </ol>

        <h3>Janrain</h3>
        <em>Software Architect - Portland, Oregon - 2013-2015</em>
        <blockquote>
            <a href="http://janrain.com">Janrain</a> provides social identity and user profile management services for
            web sites and mobile applications.
        </blockquote>
        <p>
            Janrain products are implemented as services configured for individual customer requirements. At Janrain, I
            led the effort to unify configuration data in a single system of record. My contributions included design
            and implementation of services for managing configuration data, featuring a DSL for modeling and
            transforming data over a graph database with compile-time correctness guarantees.
        </p>
        <p>
            Janrain services produce profile and event data from sources including social networks, web forms, and user
            behavior. At Janrain, I led the effort to build analytics products that leverage this data. My
            responsibilities included project architecture, vendor evaluations, and project planning and leadership.
        </p>
        <p>
            Janrain manages engineering projects using the methodologies of scrum, continuous delivery, and iterative
            development. At Janrain, I defined, prioritized, and sequenced work. I collaborated with individual
            contributors, and drove stakeholder understanding and alignment. I facilitated process meetings, including
            sprint planning, sprint retrospective, and demonstrations of progress.
        </p>

        <h3>Marin Software</h3>
        <em>Senior Engineer - Portland, Oregon - 2012</em>
        <blockquote>
            <a href="http://marinsoftware.com">Marin Software</a> allows advertisers to manage online marketing
            campaigns across a variety of publishers, including Google and Facebook.
        </blockquote>
        <p>
            I developed search features and performance improvements. I developed a data pipeline for asynchronously
            loading search and analytic data into the front-end web application.
        </p>

        <h3>ClearAccess Inc.</h3>
        <em>Senior Engineer - Vancouver, Washington - 2009-2012</em>
        <blockquote>
            ClearAccess was acquired by Cisco Systems in March 2012. ClearAccess provided Auto-Configuration Server
            (ACS) software and customer-presence equipment (CPE) firmware to deliver flexible and scalable device and
            application management based on the Broadband Forum's TR-069 standard.
        </blockquote>
        <p>
            I was responsible for development of the ACS product, including: 1. web services and background processes
            implemented in Scala and Java, 2. user interfaces utilizing AJAX libraries and patterns, 3. data storage
            (MySQL, PostgreSQL, and Oracle Database, Mongo, Solr) and ORM (Hibernate), and 4. device communication
            scripting using server-side JavaScript interpreter.
        </p>
        <p>
            I developed the search and reporting stack, including: 1. object-to-document mapping library converts
            relational business entities to search documents, 2. background process services requests to index business
            entities and other index maintenance tasks, 3. domain-specific language parser for representing complex
            search queries, and 4. reusable UI components for integrating search and reporting features throughout the
            product.
        </p>
        <p>
            I was responsible for operational support of production issues, including troubleshooting production
            environments, monitoring and diagnostics, and fixing coding errors.
        </p>
        <p>
            I provided project management, including work prioritization. I communicated with stakeholders and produced
            technical requirements, with focus on customer satisfaction and software architecture. I developed the
            release process to produce deliverables including build artifacts and documentation.
        </p>

        <h3>Qualcomm, Inc.</h3>
        <em>Senior Engineer - Portland, Oregon - 2001-2009</em>
        <blockquote>
            <a href="http://qualcomm.com">Qualcomm</a> designs, manufactures, and markets wireless telecommunications
            products and services based on its CDMA technology, and delivers integrated wireless applications and
            services.
        </blockquote>
        <p>
            I advanced adoption of hosted web services using J2EE, AJAX, and related technologies. I lead technology and
            best practice adoption. I advanced the use of unit testing through advocacy, presentation, mentoring, and
            championing related techniques such as dependency injection and mock objects.
        </p>
        <p>
            I created an engine for processing long-haul driver logs according to the FMCSA Hours-of-Service
            regulations. I implemented the engine in C for maximum source compatibility across platforms, and provided
            Java and .NET interop.
        </p>
        <p>I developed a HTTP service for generating PDF and HTML reports.</p>
        <p>I developed a service for delivery of email and SMS alert messages based on application-defined logic.</p>
        <p>
            I developed a J2EE web application for real-time monitoring of valuable freight, included map visualization,
            geofencing, and alert notification via email and SMS. I integrated with Qualcomm and customer back-end
            systems using REST and JMS. I implemented the UI, data store, geofence drawing and detection, and alert
            delivery.
        </p>
        <p>
            I developed an ASP.NET web application that integrates customer data with vehicle position streams to detect
            business events. I Implemented the UI, customer integration interface, and business-rules state machine.
        </p>

        <h2>Education</h2>
        <em>
            <a href="http://pdx.edu">Portland State University</a> - BS Information Systems and Quantitative Analysis -
            2001
        </em>
        <p>
            Coursework included C, C++, C#/.NET, SQL, data structures and algorithms, data modeling, finance, marketing,
            and communication.
        </p>
    </div>
);
