import React from 'react'
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation("about");
  return (
    <div>
        <h1>{t("TitlePage")}</h1>
        <p>
            {t("Paragraph")}
        </p>
    </div>
  )
}

export default About;