import React from 'react';


import './Igrolend.sass'
import Header from "@/components/DragonsDungeonComponents/Header/Header";
import CalculateLeadForm from "@/components/CalculateLeadForm/CalculateLeadForm";
import LeadForm from "@/components/LeadForm/LeadForm";
import FirstSection from "@/components/DragonsDungeonComponents/FirstSection/FirstSection";
import SecondSection from "@/components/DragonsDungeonComponents/SecondSection/SecondSection";
import ThirdSection from "@/components/DragonsDungeonComponents/ThirdSection/ThirdSection";
import ChooseUsSection from "@/components/DragonsDungeonComponents/ChooseUsSection/ChooseUsSection";
import FifthSection from "@/components/DragonsDungeonComponents/FifthSection/FifthSection";
import SixthSection from "@/components/DragonsDungeonComponents/SixthSection/SixthSection";
import Footer from "@/components/DragonsDungeonComponents/Footer/Footer";

function Page(props) {
    return (
        <main id={'igrolendPage'}>
            <Header igrolend={true}/>

            <FirstSection igrolend={true}/>

            <SecondSection igrolend={true}/>

            <ThirdSection igrolend={true}/>

            <ChooseUsSection igrolend={true}/>

            <FifthSection igrolend={true}/>

            <SixthSection igrolend={true}/>

            <Footer igrolend={true}/>

            <LeadForm igrolend={true}/>
            <CalculateLeadForm igrolend={true}/>
        </main>
    );
}

export default Page;