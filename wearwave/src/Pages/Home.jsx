import React, { useEffect } from "react"
// import Footer from "../components/Footer";
import { useState } from "react";
import styles from "../styles/Home.module.css";
function Home(){
    let [img, setImg] = useState("https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/14/7cec9b95-a683-473c-aca8-cc510821b1cd1676394720493-Desktop-Banner.gif")
    let  images = ["https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/14/7cec9b95-a683-473c-aca8-cc510821b1cd1676394720493-Desktop-Banner.gif","https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg","https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg","https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg","https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg","https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg","https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg"]
    // console.log(images.length);

    // let [cur,setCur] = useState(0);
let cur =0;
    // useEffect(()=>{
    //     setImg(images[cur])
    // },[cur])
    // function increase(){
    //     setCur(cur+1)
    //     console.log(cur);
    // // }

    // setInterval(()=>{
    //     // setImg(images[cur])
    //     // setCur(cur+1)
    //     // console.log(pre);
    //     // if(cur === images.length-1){
    //     //     setCur(0)
    //     // }
    //    cur++;
    //     console.log(cur);
    // },3000)


    return (
        <div>
            <img src={images[0]} alt="" />
            {/* <p>{cur}</p> */}
            <h1 className={styles.heading}>DEAL OF THE DAY</h1>
            <div className={styles.dayDeals} > 
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/44a9b614-4f67-4b5a-89e5-ee50f7d5f8681676819472882-HRX_Activewear_Min_65_off.png" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/ea799980-8939-4dc3-8bbe-72b3f63ab8e31676819472832-Casual_Shoes_Min_40_Off.png" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/06d56cbf-0135-426a-a81a-b637c6f30dac1676819472817-Campus-_Highlander_Starting_499_1299.png" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/216f9bdf-e348-4e9d-b108-f22ceafbf4911676819472966-Starting_1299_2499.png" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/6ecb87f9-bd94-4c0a-a64b-4692197d6be21676819472939-Roadster-_Here_-_Now_-_more___Flat_70_off.png" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/18e8fbf9-7702-4f58-95a4-7cdb69850e641676819472892-Mango_Man-_Levi-s-____Flat_50_off.png" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/d3ab2a84-91c5-4137-b3b3-807b540bcc531676819472859-H-M-_USPA___STarting_399.png" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/cd86754f-29cc-4a42-b8f1-bce7218493031676819472927-Puma-_Nike_-_more_-min_40_off.png" alt="" />
            </div>
            <h1 className={styles.heading}>BEST OF MYNTRA EXCLUSIVE BRANDS</h1>
            <div className={styles.brands}>
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/b25f89eb-fbeb-4013-829e-32ee5b5daaa01646895183668-Roadster-HRX_Unisex.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/bfa5c871-a5a5-4d81-b46e-18aedccfdc9b1644407437913-Kurta_sets-_Anouk-_AAY_-_more.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/046147d1-1874-4c10-adb9-6dbd88b606e71644407437923-Kurtas-_Anouk-_Sangria_-_more.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/76acf345-fc62-4b49-8b2c-9c0fc9c925311644407437977-Tops_-_Dressberry-_AAY_-_more.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3923c0c1-2260-4f0e-9598-15b6f9d7731c1644407437960-Roadster_and_H-N_Shirts.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eb70855e-98c4-412d-bf20-50804546d57e1644407437883-Dresses_-_Dressberry-_Chemistry_-_more.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eff5a33f-ea24-4e70-84e5-ec4d25ee5c7b1644407437968-Roadster_and_KnK_Tshirts.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/667a71f0-c24b-4a00-a98c-cc6a54a815e91644407437985-Tshirts_-_Roadster-_KnK_-_more.jpg" alt="" />
            </div>
            <div className={styles.brands}>
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/ffaa74a6-4824-4b19-8936-70ffaef92f001644407437937-M-H_and_HRX_Tshirts.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/f9621136-0f00-44d5-aa06-b727a6c8f7c51644407437944-M-H_and_Wrogn_Shirts.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3f41465b-7109-4bb2-bf79-ab89ff2128be1644407437899-HRX_and_Harvard_Trackpants.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/745cec57-af58-4ba6-8ae1-a3ccbe7c54e91644407437930-Lingerie_-_Loungewear_-_DB-_ETC.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/e27ee3af-3f6b-4106-9b20-2b4463c80ba41644407437953-Roadster-_Wrogn_Jeans.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/2b15a87a-1d92-4edf-99c2-ec390a38089e1644407437872-Activewear_-_HRX-_Slazenger.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/931b0b8f-c14d-4ec7-b923-cf512de991731644407437891-HOP_and_Anouk_Kurtas_-_sets.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/201d1bfd-287e-47b6-bef6-3c46eac444a51644407437906-Jeans_-_Roadster-_M-H_and_more.jpg" alt="" />
            </div>
            <h1 className={styles.heading}>TOP PICKS</h1>
            <div className={styles.PICKS}>
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/062cea23-9a6a-44b9-bdd4-87cae6a462311645602543339-Kurta-sets.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/8d65d400-decd-4f42-902c-a40350a16ed11645602543346-Kurtas.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/398ee53b-5899-4a9a-9d0b-b35d60c01cb41645602543325-Dresses.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/2f410d81-7fae-400e-9ecc-b4a8b6df72b91645602543430-Women-Jeans.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/82a9be01-3032-4725-9500-bcc94366b7931645602543399-Mens-Shirts.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/c6b09c0f-5c57-472c-a3fc-854ec506a90e1645602543387-Men-T-shirt.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f08e2bac-9bed-4f87-b022-0dce8defeded1645602543380-Men-Trousers.jpg" alt="" />
            </div>
            <h1 className={styles.heading}>CATEGORIES TO BAG</h1>
            <div className={styles.bags}>
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aa4658b5-d723-4652-9ea1-00456b355c3a1645602467046-Kurta-Sets.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f9ca5609-b634-42d4-8c08-a8eaebb818b71645602467085-Sarees.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b156f76a-26e7-4bce-9941-8a67d3c16f331645602467120-Teens-Wear.jpg" alt="" />
            </div>
            <div className={styles.bags}>
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/fb091b07-c275-4578-b08d-b4f93dfe9e841645602466976-Beauty.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b827f900-ed61-4467-84fa-a6e357787e761645602467079-Plus-Size-Styles_W.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/cd083042-3bb2-4231-8b96-0234fc0ed23f1645602467032-Jeans.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/736f3951-e67b-414f-bfb1-56e2794d441d1645602467114-Sports-Shoes.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d13255df-c846-4dbd-8458-77ccaba4f9eb1645602467142-Trousers.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7a774194-94e6-49b5-b8bb-64bf9901bc671645602466989-Casual-Shoes.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/5860c3c2-a639-4625-ac1d-4d55406f128a1645602467134-Track-Pants.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/07e5c29a-2eab-4b2d-b617-6565ffe1f4701645602467025-Innerwear.jpg" alt="" />
            </div>
            <div className={styles.bags}>
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/09b3164c-241a-4134-baa1-49b12c56c3901645602466968-Bath-Essentials.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/171a820e-96f0-4b11-a138-03953a7e05481645602467153-Trousers_W.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/054a056f-33e8-4b6c-b747-9b88d7fce0a11645602467174-Watches.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d3c5cd23-392f-40be-8080-99ffb79c27261645602467128-Tops.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/355b9499-3345-4457-8b3b-2eeceaecf4561645602467020-Infant-Essentials.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7f814546-b705-4d9b-9ab5-1ddfeca786391645602467001-Flip-Flops.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/12c3b4aa-8160-442f-b93e-e896eafb1b0a1645602467160-T-Shirts-_-Shorts_Kids.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/67783047-7fcc-4530-9368-9be75a713e411645602466995-Dresses.jpg" alt="" />
            </div>
            <h1 className={styles.heading}>DEALS ON TOP BRANDS</h1>
            <div className={styles.topBrands}>
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/3/f0dc0024-a8d3-4aec-9e1b-d9b6873b52d51599144996663-Crocs.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/85d5e2e1-fa21-43b0-a352-438e15f1006e1598892141455-Nike.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/22b908fa-38aa-46a6-a3cd-a5ccd46b04ce1598892141560-Puma.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/26/adc58a2c-fa18-4b94-b2d6-4c692a44123d1601115417606-unnamed--6-.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8238147e-a86e-4fe4-a830-ab5c2c49beba1598892141840-W.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/7d0153c1-2fc4-49ec-ac7c-3c402d1ed45f1598948396008-USPA.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/c6a4ec29-f907-4d54-8ed7-83006938b20c1598892141612-Tommy-Hilfiger.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/d1fab403-7742-4a91-a781-2e36bea65a8a1598445950683-Men-s-Apparel---Roadster.png" alt="" />

            </div>
            <div className={styles.topBrands}>
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/4abbda25-8d58-44f7-a986-c80fa31b08b31598892141513-Only.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/72af0092-fd16-4b61-b1fb-e617c089fe251598456566139-image_jpeg1938580873.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/9/5a5a162e-c4ad-4497-b995-a3c077d25df71596975348916-Women-s-Ethnic-Wear_Vishudh.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/da4935ce-8f3f-4273-bfbe-6ded783cf2131598948352513-Levis.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/ee953e28-7ca8-4e08-a6a9-c51c98f823411598892141010-BIBA.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/08f15f56-156e-45c8-b0bc-7aecd0b122431598970514602-Veromoda.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ec275a-9d3a-432c-b3df-736a7e9518d11598892141670-UCB.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/0390ad1a-1262-4f7a-8f81-37c1644142a91598445950839-Sports---HRX-by-Hrithik-Roshan.png" alt="" />

            </div>
            <div className={styles.topBrands}>
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/7/697bb8c0-5c99-4d02-b0f9-d46ca72889db1602086685082-dressberrywomen.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/7/ff1358d9-6c6f-4fef-b169-d2875d43292c1602086685210-mhmen.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/28/529db52b-ba58-423a-9ad6-3161ef642dff1598605975128-Women-s-Ethnic-Wear---Anouk.png" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/7/7c774b84-f2ec-4a3f-9208-8ba663ee4c221602086685157-hereand-now-men.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/c8f8c028-21c6-4b65-9d77-188378312e561598892141092-Cutecumber.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/7/99f75f40-4d3f-4049-87da-be2662359aca1602087172072-sangriawomen.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/4/e6c7a718-acc0-4aa6-b04c-470ab139d66c1599230080722-F21--4-.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2021/11/12/2d4b2a2c-9332-4844-bb32-6ccf0e35fef21636697516790-Urbanic-1.jpg" alt="" />

            </div>
            <h1 className={styles.heading}>BRANDS AT SLASHED PRICES</h1>
            <div className={styles.slashed}>
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/8cd7ec33-78fe-4b40-802d-365238b1376e1644475927229-Sangria.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/8/5809282f-372d-4881-a8dc-95d5958a86be1644338988944-Roadster_HP.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/8/e96d85b8-7a62-4f57-898a-6c291ffb4d7f1644339048429-HRX_HP.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/e8546602-b217-45b0-a2d4-9469ba59938f1644475927176-Chemistry.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/3cbf365e-8027-4aed-859b-6d40886418d21644475927244-Anouk--1-.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/af85f560-cd67-469a-8405-4ec64a33f9971644475927251-Dressberry.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/a0be607a-142c-4433-90ad-d13f22148f111644475927161-All-about-you.jpg" alt="" />
            </div>
            <div className={styles.slashed}>
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/b55aac85-4eb7-44d0-94bb-5077e8da70001644475927183-House-of-Pataudi.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/f3120cb8-1af3-40fa-b7ed-02466eb03def1644475927205-Kook-N-Keech.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/83ac07a7-65b3-4ede-a434-d9e3d103e3591644475927220-Moda-Rapido_1.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/fa16e2c8-d5af-4d71-8dfb-14484fd0db811644475927213-Moda-Rapido_2.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/40ddc119-a9bd-4117-ad8b-fc5bcc6a09141644475927190-ether.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/4900ccb0-86be-4fa4-806e-9cad9496e3db1644475927196-INVICTUS.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/fdbf3336-1777-46fd-aff6-7786268bc0d71644475927169-Harvard.jpg" alt="" />
            </div>
            <h1 className={styles.heading}>BEST BUYS</h1>
            <div className={styles.bBuys}>
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/420ebd43-1270-4954-bad6-e9e50b52384d1645602339422-Heels.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/32f343c6-74e1-45c3-9923-8e161b484a641645602339538-Tops.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/90867e68-f373-4e21-a3ac-bbbb4f199c7f1645602339404-Flats.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/c62327cb-acc8-436b-9350-ac52c86719dd1645602339517-Sports-Shoes.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/1908b009-5fed-4681-add0-62c8a838b72e1645602339504-Shorts.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/c8946606-d520-4ba6-a9df-2e6a6ad70fe91645602339490-Sarees.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/4d7c5595-b7be-42a4-8640-d66d65bd0a2d1645602339441-Innerwear.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b3fa47d6-deba-4568-b49c-1e406bd09ae61645602339531-Sweaters_M.jpg" alt="" />
            </div>
            <div className={styles.bBuys}>
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/9fb1cb10-a734-4457-9f59-58abc3bab3631645602339477-Makeup-Essentials.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/6b063e28-1fe4-410c-852b-a932a2c7252d1645602339462-Lingerie.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/907cd30b-caa9-4030-9e6f-c015cfbb9ffa1645602339382-Belts-_-Wallets.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/1cde2cbb-f762-40a4-bdc1-eadfb7616d841645602339410-Formal-Shoes.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/e18662fa-fe65-437b-b385-71b31cd10f021645602339470-Loungewear.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/5be435fa-3b6d-4b07-9394-70ee808fb6fa1645602339448-Kurtas-_-Sets.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/a2637231-0f57-4f0e-b25b-b36f8914d1f91645602339554-T-Shirts-1.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/989dd7d1-f411-496a-8c44-88d5fef68d611645602339546-T-Shirts.jpg" alt="" />
            </div>
            <h1 className={styles.heading}>MYNTRA LUXE</h1>
            <div className={styles.luxe}>
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/8c07792e-bbf9-4935-8d9c-3a6a66eba4f01636726166240-HP-DKNY.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/1cbf16e3-afe2-4013-af4d-4e427f1e30ee1636726166266-HP-Junghans.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/98b141e0-8d71-4e1b-8afa-49d1b7113a141636726166278-HP-Luxe.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/35f5db21-a813-4c1a-81e4-7ca2bc5a08351636726166290-HP-Oris.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/9c262136-abbd-4087-9267-bc1f3b90b3c01636726166303-HP-RaymondWeil.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/5158cd92-89b5-452e-97c5-938bdf63516e1636726166284-HP-Movado.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/a9d39733-2022-4964-8c22-6c9e43d8502a1636726166259-HP-Hackett.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/585ac7b3-36e3-4964-8707-a2249df2b1291636726166319-HP-versace.jpg" alt="" />


            </div>
            <div className={styles.luxe}>
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/17/4fac3c61-9e54-486c-a083-6f61df81436c1623933299972-HPCarouselVisibility-MyntraLuxe-Tissot.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/65d5107e-35cf-4176-aef3-b7ae77dd09761636726166252-HP-FredPerry.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/17/9b04f96a-f1ed-4edc-8840-483719055fdb1623940080549-HPCarouselVisibility-MyntraLuxe-ExploreStore.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/6eaf8591-e92b-4ab3-a4e5-f38caac6c7d91636726166295-HP-POLORalphLauren.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/17/adf54639-1714-4935-8d22-ceef8ef1d8d31623940080665-HPCarouselVisibility-TheCollective-ExploreStore.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/7e273a5a-9372-4956-af96-38aa903668201636726166272-HP-KarlLagerfeld.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/17/bfa35f05-88b3-419f-af88-83c2ea0483f91623933299966-HPCarouselVisibility-MyntraLuxe-Tedbaker.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/884c0181-9da3-43c4-89f5-8696b97ec7751636726166246-HP-Dyson.jpg" alt="" />
            </div>
            <h1 className={styles.heading}>GIFTING CARDS</h1>
            <div className={styles.cards}>
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/22/22b3c59a-fa16-434d-b2e1-d8779f1abe871661164884892-Gift-Card-Banner.png" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/ef1e7c6b-bec4-471c-9c36-72fffd975c0c1636738225251-happy-wedding.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/72f3fe20-f0a5-4894-852c-817b40b285291636738225244-happy-birthday.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/934a734c-ebb4-48c4-96d0-018e1e5eb7e21636738225215-milestones.jpg" alt="" />

            </div>
            <div className={styles.luxe}>
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/17209d4a-6c5e-4ba7-8d12-77b77dd3d04f1647340317606-SS22-KeyHighlights-Homedecor.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/6f5ef7a2-3562-4221-8f89-f7dd6c157bd31647340281629-SS22-KeyHighlights-TommyHilfiger.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/c3792c79-967a-4d54-9cde-963e86defe331647340317589-SS22-KeyHighlights-F21.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/042e2643-e1af-435b-8e20-1afcbc171b3e1647340281452-SS22-KeyHighlights-Forever21.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/d48d0786-3f7c-4124-83a7-e414bc3ccd021647340317640-SS22-KeyHighlights-ModaRapido.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/3/348b6eba-104d-472e-90d3-a29cf315b9ed1646296933371-FirstonMyntra-Men-Campus.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/bb442c92-90d4-4c5e-99c3-aa5bf5a5dbae1647340391242-SS22-KeyHighlights-Women-ForeverNew.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/2ecfa799-6de6-425f-8578-3c59986d28951647340317709-SS22-KeyHighlights-Zeneme.jpg" alt="" />
            </div>
            <h1 className={styles.heading}> STYLECAST HOTTEST FINDS</h1>
            <div className={styles.hotttest}>
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/fe3325dc-3293-4670-96c9-4449be4efad81647330317086-StyleCast-Mar-HP-DesiGirl.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/58386d41-5cd6-47f4-874c-d53f83075bf41647330317173-StyleCast-Mar-HP-InternationalBrands.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/1dceb1b3-90f5-49f0-8681-e08ee888911c1647330317155-StyleCast-Mar-HP-GlobalBrands.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/23b20478-678e-4191-8245-84886f8094df1647330317259-StyleCast-Mar-HP-Urbanic.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/47f4c13c-a1a3-42f4-b9f6-02864f364b791647330317103-StyleCast-Mar-HP-EnglishSummer.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/ba8e2b64-3701-482a-b059-e1d3e8b96a221647330317190-StyleCast-Mar-HP-KeepItCasual.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/b3c39fe3-9ac4-42f0-b492-8575a2fc8ae21647330317225-StyleCast-Mar-HP-PartyInTheCity.jpg" alt="" />

            </div>
            <h1 className={styles.heading}> TRENDS FOR HER</h1>
            <div className={styles.luxe}> 
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/fabc0cd1-5535-4ea4-bf36-2b1857f2eb371645776096602-SS22-Trends-Women-Intricate-Threadwork.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/0d98cf21-4407-45e7-9b40-5f1fce278b6d1646753584544-SS22-TrendsForHer-Maxi-_-Mini-Dresses.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/819cc1cd-678b-43d2-aa63-f34b44755e561646753584613-SS22-TrendsForHer-Wide-_-Bootcut-Bottoms.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/2db05e12-4981-470f-a7cf-43355c4c3fb31646753584596-SS22-TrendsForHer-Tie-_-Dye-Sarees.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/1a66b994-5b88-4d40-b8d3-cff57b438d4a1646753584579-SS22-TrendsForHer-Summer-Sandals.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/6eed6ace-940e-47d4-8441-a362c2c4fba11647516398904-SS22-Trends-Women-Blouson-Tops.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/a39069f5-a7c9-4a57-81a0-bd6f5eb65b061645776096638-SS22-Trends-Women-Minimalist-Jewellery.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/80692309-98b1-4572-905b-6dcac3ecf32a1647516398938-SS22-Trends-Women-Gota-Patti-Kurtas.jpg" alt="" />

            </div> <h1 className={styles.heading
            }>BEST FOR HIM</h1>
            <div className={styles.luxe}>
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/ad181088-f7c7-4510-b10c-4ca597f9c33d1647516418475-SS22-Trends-Men-Printed-Sliders.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/0df04bdd-853b-42fe-a494-00bc329ed1871645776676864-SS22-Trends-Men-Logo-Mania-Joggers.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/43ed9e78-f1d5-4398-94bd-db22cf7165e41646753693317-SS22-TrendsForHim-Textured-Shoes.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/2bd946cc-34f4-4958-91ed-91fa41eadd231646753693282-SS22-TrendsForHim-Colourblocked-Top-Wear.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/d158792a-f92a-4eac-b9b1-a0f54e8fd59d1647516418438-SS22-Trends-Men-Military-Inspired-Styles.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/bc7b623e-96e5-4811-8aba-679bf0c8ac401646753693245-SS22-TrendsForHim-Character-Tees.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/85821f6f-0cf0-4100-9527-af1e8e080ae31647516418456-SS22-Trends-Men-Multi-Pocket-Nehru-Jackets.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/21975168-2bdd-4f8d-9567-cb04a0132fbb1645776676882-SS22-Trends-Men-Logo-Mania-Tees.jpg" alt="" />

            </div>
            <h1 className={styles.heading}>BEST OF KIDSWEAR</h1>
            <div className={styles.hotttest}>
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/0175ff89-fac8-46ba-856a-e95253fb0f501647247892132-Kurtas-_-Kurta-Sets.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/971db165-cf95-476c-89d7-e4c9e41be7f51647247892158-Top-Brands-----3.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/d7e692a5-e41d-4c1e-b50c-77d7d2f2ff101647247892167-Tops-_-Tees.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/b4c398d8-fa05-49a9-b92c-6a3385bd43d71647247892116-Dresses.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/d82a5429-eb15-4ae1-86f8-98cb62085d101647247892124-Kids-Wear.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/4b9cb7c1-f624-47e7-9345-50e334aacf5e1647247892141-Shorts-_-Skirts.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/7df8be43-773d-4a93-9e51-e19200b13f641647247892149-Teens-Wear.jpg" alt="" />

            </div>
            <h1 className={styles.headind}>NEW IN TOP BRANDS</h1>
            <div className={styles.bags}>
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/1aaf5e6a-2978-4ed8-9634-1559f530d73b1645860227457-SS22-BestOfBrands-H_M.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/3ce3c5e7-6060-4b15-b80b-6ddcd19d385a1645860227491-SS22-BestOfBrands-Max.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/96b79372-852b-4e41-904a-ffc47f840d171645860227477-SS22-BestOfBrands-Levis.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/ae3f2d8b-4f02-40ab-8233-d9ab9c7be4941645860227438-SS22-BestOfBrands-CKJeans.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/426cb519-be57-4970-b23c-edb9e442cb761645860227551-SS22-BestOfBrands-W.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/823d5fd5-48e6-4eb1-bd66-1ea70306275a1645860227498-SS22-BestOfBrands-Metro.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/fd730d26-ff9d-41e5-af2e-b20f71757b5f1645779089335-BestOfBrands-Nike.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/b69656bd-7766-45db-96ea-d45df19a7a361645860227484-SS22-BestOfBrands-LP.jpg" alt="" />
            </div>
            <h1 className={styles.heading}> NEWNESS FOR EVERY OCCASION </h1>
            <div className={styles.occ}>
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/407be362-f208-4d84-a723-f30045e4a6151645784458357-SS22-ShopByOccassion-BackToOffice-1-.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/4ff811f4-1ece-46dc-baf4-3454c9dc41831645784458532-SS22-ShopByOccassion-PilatesClass-1-.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/90f48b14-9947-4637-8f92-75e13dbc3a6f1645784458462-SS22-ShopByOccassion-HappyHours-1-.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/d99b81d4-a71f-406e-9a54-5b14d2800d6d1645784458375-SS22-ShopByOccassion-BackToOffice.jpg" alt="" />
            </div>
            <div className={styles.occ}>
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/8bde42f6-0001-4fdf-89ba-bdeb7d41a8081645784458585-SS22-ShopByOccassion-SummerWedding.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/ff13247e-84d8-4bd3-ba09-38aa0eb61fc01645784458550-SS22-ShopByOccassion-PilatesClass.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/0771918e-d4cb-4fc7-9bbe-719ff27f78201645784458410-SS22-ShopByOccassion-BeachVacation.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/7920b25a-11be-46f0-8dee-efca6cd045911645784458497-SS22-ShopByOccassion-NetflixParty-1-.jpg" alt="" />

            </div>
            <h1 className={styles.heading}>LATEST IN BEAUTY & GROOMING</h1>
            <div className={styles.occ}>
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/2c49ab74-5efa-4104-b71c-cdb4891762931645791174303-SS22-Beauty-Philips.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/1850cdd3-e1be-47b3-ac4b-f8f395afce491645791174169-SS22-Beauty-Biotique.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/7f7c368a-fa16-44f9-b7a2-8562ec21ba0a1645791174190-SS22-Beauty-ColorBar.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/45b5535a-38c4-4c10-a301-3b6f3b56e43f1645791174266-SS22-Beauty-Lakme.jpg" alt="" />
            </div>
            <div className={styles.occ}>
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/b0ed0a6a-5b23-42d4-9dce-3fceb80ff68c1645791174229-SS22-Beauty-Himalaya.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/564b3c15-dba4-422e-acd5-72aac85b75541645791174149-SS22-Beauty-Beardo.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/f4330a78-6a11-4edc-bad9-dc03f02dec0e1645791174210-SS22-Beauty-FacesCanada.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/31253277-4623-43ed-9129-9b8015520e901645791174285-SS22-Beauty-Mamaearth.jpg" alt="" />

            </div>

        </div>
    )
}
export default Home;