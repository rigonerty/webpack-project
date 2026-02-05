import React from 'react'
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation("home");
  return (
    <div>
        <h1>{t("TitlePage")}</h1>
        <p>new as asd asdas d</p>
        <p>
            {t("Paragraph")}
        </p>
    </div>
  )
}

export default Home
