import React from 'react';
import { Box, Typography, Card, CardContent, Link } from '@mui/material';
import { Helmet } from 'react-helmet';
import styles from '../styles/About.module.css';

function About() {
  return (
    <>
      {/* ===== SEO META TAGS ===== */}
      <Helmet>
        <title>About Amresh Bhuyan | Founder & CEO – AediaX Tech Private Limited</title>

        <meta
          name="description"
          content="Learn about Amresh Bhuyan, Founder & CEO of AediaX Tech Private Limited. An Indian full-stack software developer and entrepreneur building AI-driven enterprise and academic management systems."
        />

        <meta
          name="keywords"
          content="Amresh Bhuyan, AediaX Tech, AediaX Founder, Indian Software Developer, AI Startup India, Full Stack Developer, Bhubaneswar Entrepreneur"
        />

        <meta name="author" content="AediaX Tech Private Limited" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Social Sharing) */}
        <meta property="og:title" content="About Amresh Bhuyan | AediaX Tech" />
        <meta
          property="og:description"
          content="Founder & CEO of AediaX Tech Private Limited, building AI-powered software, enterprise platforms, and scalable digital systems."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="AediaX Tech Private Limited" />
        <meta property="og:url" content="https://aediax.com/about" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amresh Bhuyan | Founder of AediaX Tech" />
        <meta
          name="twitter:description"
          content="Indian full-stack developer and entrepreneur leading AediaX Tech Private Limited."
        />
      </Helmet>

      {/* ===== PAGE CONTENT ===== */}
     <Box id={styles.aboutSection} className={styles.aboutContainer}>

      <Typography id={styles.aboutTitle} variant="h2" className={styles.title}>
        About Amresh Bhuyan
      </Typography>

      <Typography id={styles.aboutSubtitle} variant="h5" className={styles.subtitle}>
        Founder & CEO, AediaX Tech Private Limited
      </Typography>

      {/* Biography */}
      <Typography id={styles.bioPara1} className={styles.bio}>
        Amresh Bhuyan (born 9 March 2004) is an Indian full-stack software developer,
        technology entrepreneur, and engineer from Belpal, Baripada, Mayurbhanj,
        Odisha (757026). Based in Bhubaneswar, India, he is widely recognized for his
        leadership in software development and for modernizing academic and enterprise
        management systems through technology.
      </Typography>

      <Typography id={styles.bioPara2} className={styles.bio}>
        As the Founder, Director, and Chief Executive Officer of AediaX Tech Private
        Limited (established on 6 June 2025), Amresh focuses on building AI-driven
        platforms, scalable web applications, and cross-platform mobile solutions.
        His work blends strategic thinking with hands-on engineering to deliver
        future-ready digital systems.
      </Typography>

      <Typography id={styles.bioPara3} className={styles.bio}>
        He is currently pursuing a Bachelor of Technology in Computer Science and
        Engineering (2022–2026). Alongside engineering, he holds a strong interdisciplinary
        interest in biological systems and analytical problem-solving, which significantly
        influences his approach to software architecture, artificial intelligence,
        and system design.
      </Typography>

      {/* Cards */}
      <Box id={styles.cardsWrapper} className={styles.cardContainer}>

        {/* Professional Role */}
        <Card id={styles.professionalRoleCard} className={styles.card}>
          <CardContent>
            <Typography id={styles.professionalRoleTitle} variant="h6" className={styles.cardTitle}>
              Professional Role
            </Typography>

            <Typography id={styles.professionalRoleText} className={styles.cardText}>
              Amresh Bhuyan serves as the Founder, Director, and CEO of AediaX Tech
              Private Limited. Under his leadership, the company delivers AI-powered
              software systems, enterprise platforms, and mobile applications for
              Android and iOS, addressing real-world operational and management challenges.
            </Typography>

            <Typography id={styles.professionalRoleLinks} className={styles.links}>
              <Link href="https://aediax.com/team/amresh-bhuyan" target="_blank">AediaX Profile</Link> ·{' '}
              <Link href="https://scholar.google.com/citations?user=vvShiq8AAAAJ&hl=en" target="_blank">Google Scholar</Link> ·{' '}
              <Link href="https://commons.wikimedia.org/wiki/User:Amresh_Bhuyan" target="_blank">Wikimedia</Link>
            </Typography>
          </CardContent>
        </Card>

        {/* Academic Background */}
        <Card id={styles.academicCard} className={styles.card}>
          <CardContent>
            <Typography id={styles.academicTitle} variant="h6" className={styles.cardTitle}>
              Academic Background
            </Typography>

            <Typography id={styles.academicText} className={styles.cardText}>
              Amresh is a B.Tech student in Computer Science and Engineering
              (2022–2026). His academic journey reflects a balance between theoretical
              foundations and real-world application, with strong emphasis on software
              engineering principles, system design, and emerging technologies.
            </Typography>
          </CardContent>
        </Card>

        {/* Family & Values */}
        <Card id={styles.familyCard} className={styles.card}>
          <CardContent>
            <Typography id={styles.familyTitle} variant="h6" className={styles.cardTitle}>
              Family & Values
            </Typography>

            <Typography id={styles.familyText1} className={styles.cardText}>
              Amresh Bhuyan comes from a highly educated and entrepreneurial family.
              His father, Mr. Sanat Kumar Bhuyan, holds an MBA and serves as a Director
              at AediaX Tech Private Limited. His mother, Mrs. Puspalata Bhuyan, holds
              postgraduate degrees in Economics and Management and works as an
              Accountant at AediaX.
            </Typography>

            <Typography id={styles.familyText2} className={styles.cardText}>
              He has an elder sister, Mrs. Mausumi Bhuyan, with an age gap of five years.
              She is a highly talented, intelligent, and supportive mentor in his life.
              Teaching is her passion, and she currently serves as a Government School
              Teacher while also running a coaching center for competitive examinations.
            </Typography>

            <Typography id={styles.familyText3} className={styles.cardText}>
              Mausumi Bhuyan has played a significant role in supporting Amresh during
              the foundation and growth of AediaX Tech Private Limited. In addition to
              mentoring and guidance, she occasionally contributes to the organization
              by assisting with human resource and administrative responsibilities,
              reinforcing the company’s ethical and educational values.
            </Typography>

            <Typography id={styles.familyText4} className={styles.cardText}>
              The family also operates Bhuyan Warehouse in Belpal, Baripada, Mayurbhanj,
              Odisha (757026), successfully managed for over three decades. This strong
              family foundation has deeply influenced Amresh’s leadership discipline,
              integrity, and long-term vision.
            </Typography>

            <Typography id={styles.familyLinks} className={styles.links}>
              <Link href="https://aediax.com/team/sanat-kumar-bhuyan" target="_blank">Father Profile</Link> ·{' '}
              <Link href="https://aediax.com/team/puspalata-bhuyan" target="_blank">Mother Profile</Link>
            </Typography>
          </CardContent>
        </Card>

      </Box>
    </Box>
       </>
  );
}

export default About;
