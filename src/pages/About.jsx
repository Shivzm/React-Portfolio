import React from 'react';
import { Box, Typography, Card, CardContent, Link } from '@mui/material';
import { Helmet } from 'react-helmet';
import styles from '../styles/About.module.css';

function About() {
  return (
    <>
      {/* ===== SEO META TAGS ===== */}
      <Helmet>
        <title>About Shivam Mukherjee | AI Engineer – Full-Stack Developer</title>

        <meta
          name="description"
          content="Learn about Shivam Mukherjee, AI Engineer & Full-stack Developer. An Indian full-stack software developer and AI engineer building AI-driven enterprise."
        />

        <meta
          name="keywords"
          content="Shivam Mukherjee, Indian Software Developer, AI Startup India, Full Stack Developer, AI Engineer"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph (Social Sharing) */}
        <meta property="og:title" content="About Shivam Mukherjee" />
        <meta
          property="og:description"
          content="A passionate AI & Machine Learning enthusiast"
        />
        <meta property="og:type" content="profile" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shivam Mukherjee" />
        <meta
          name="twitter:description"
          content="Indian full-stack developer and AI engineer"
        />
      </Helmet>

      {/* ===== PAGE CONTENT ===== */}
     <Box id={styles.aboutSection} className={styles.aboutContainer}>

      <Typography id={styles.aboutTitle} variant="h2" className={styles.title}>
        About Shivam Mukherjee
      </Typography>

      <Typography id={styles.aboutSubtitle} variant="h5" className={styles.subtitle}>
        AI Engineer & Full-stack Developer
      </Typography>

      {/* Biography */}
      <Typography id={styles.bioPara1} className={styles.bio}>
        Shivam Mukherjee (born 4 April 2005) is an Indian full-stack software developer,
        technology entrepreneur, and engineer from Sambalpur,
        Odisha (768004). Based in Sambalpur, India, he is widely recognized for his
        leadership in software development and for modernizing academic and enterprise
        management systems through technology.
      </Typography>

      <Typography id={styles.bioPara3} className={styles.bio}>
        He is currently pursuing a Bachelor of Science in Information Science & Telecommunication (2024–2027). Alongside engineering, he holds a strong interdisciplinary
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
              Shivam Mukherjee, as an intern at AediaX Tech Private Limited. Under his leadership, the company delivers AI-powered
              software systems, enterprise platforms, and mobile applications for
              Android and iOS, addressing real-world operational and management challenges.
            </Typography>

            <Typography id={styles.professionalRoleLinks} className={styles.links}>
              <Link href="https://aediax.com/intern/AEDI49225" target="_blank">AediaX Profile</Link> ·{' '}
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
              Shivam is a B.Sc student in Information Science and Telecommunication
              (2024–2027). His academic journey reflects a balance between theoretical
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
              Shivam Mukherjee comes from a highly educated and entrepreneurial family.
              His father, Mr.Anup Kumar Mukherjee is a businessman with high reputation, he is also a very popular figure in sambalpur. His mother, Mrs. Sapna Mukherjee, holds
              undergraduate degree in commerce and is a housewife.
            </Typography>

            <Typography id={styles.familyText2} className={styles.cardText}>
              He has a twin brother, Mr. Subham Mukherjee.
              He is a highly talented, intelligent, and supportive mentor in his life.
              Finance is his passion with expertise in trading, money management. He is a person with great
              communication skills & is a master ofpublic dealing.
            </Typography>

          </CardContent>
        </Card>

      </Box>
    </Box>
       </>
  );
}

export default About;
