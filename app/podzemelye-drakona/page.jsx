import '@/components/global.sass'

import './DragonsDungeonPage.sass'

import FirstSection from "@/components/DragonsDungeonComponents/FirstSection/FirstSection";
import SecondSection from "@/components/DragonsDungeonComponents/SecondSection/SecondSection";
import LeadForm from "@/components/LeadForm/LeadForm";
import ThirdSection from "@/components/DragonsDungeonComponents/ThirdSection/ThirdSection";
import FourthSection from "@/components/DragonsDungeonComponents/FourthSection/FourthSection";
import FifthSection from "@/components/DragonsDungeonComponents/FifthSection/FifthSection";
import SixthSection from "@/components/DragonsDungeonComponents/SixthSection/SixthSection";
import Header from "@/components/DragonsDungeonComponents/Header/Header";
import Footer from "@/components/DragonsDungeonComponents/Footer/Footer";
import ChooseUsSection from "@/components/DragonsDungeonComponents/ChooseUsSection/ChooseUsSection";
import CalculateLeadForm from "@/components/CalculateLeadForm/CalculateLeadForm";

export const metadata = {
    title: "Подземелье Дракона игра-шоу |Праздник в Павлово",
    description: "Игра - шоу «Подземелье Дракона» - это отличная возможность весело провести время в кругу друзей, семьи или коллег, необычно отметить Ваш праздник!",
};

export default async function Home() {
  return (
      <main id={'dragonsDungeonPage'}>
          <Header/>

          <FirstSection/>

          <SecondSection/>

          <ThirdSection/>

          <ChooseUsSection/>

          <FifthSection/>

          <SixthSection/>

          <Footer/>

          <LeadForm/>

          <CalculateLeadForm/>
      </main>
  );
}
