/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    // Teleport
    WA.room.area.onEnter("Llamaverse").subscribe(() => {
        currentPopup = WA.ui.openPopup("LlamaversePopup", "Visit Llamaverse", [
            {
                label: 'Teleport',
                className: 'primary',
                callback: () => WA.nav.goToRoom("/@/llamaverse"),
            }
        ])
    })
    WA.room.area.onLeave("Llamaverse").subscribe(() => {closePopup()})

    WA.room.area.onEnter("FestAdventure").subscribe(() => {
        currentPopup = WA.ui.openPopup("FestAdventurePopup", "Visit FestAdventure", [
            {
                label: 'Teleport',
                className: 'primary',
                callback: () => WA.nav.goToRoom("/@/festadventure"),
            }
        ])
    })
    WA.room.area.onLeave("FestAdventure").subscribe(() => {closePopup()})

    WA.room.area.onEnter("NFTFactory").subscribe(() => {
    currentPopup = WA.ui.openPopup("NFTFactoryPopup", "Visit NFT Factory", [
        {
            label: 'Teleport',
            className: 'primary',
            callback: () => WA.nav.goToRoom("/@/nft-factory#from-metadventure"),
        }
    ])
    })
    WA.room.area.onLeave("NFTFactory").subscribe(() => {closePopup()})

    WA.room.area.onEnter("ComingSoon").subscribe(() => {
        currentPopup = WA.ui.openPopup("ComingSoonPopup", "Coming Soon!", [])
    })
    WA.room.area.onLeave("ComingSoon").subscribe(() => {closePopup()})

    WA.room.area.onEnter("exitToWorkAdventure").subscribe(() => {
        WA.room.showLayer("haloExitWorkAdventure")
        currentPopup = WA.ui.openPopup("exitToWorkAdventurePopup", "Teleport to WorkAdventure", [
            {
                label: 'Whoosh!',
                className: 'primary',
                callback: () => WA.nav.goToPage("https://play.staging.workadventu.re/@/tcm/workadventure/wa-village#from-metadventure"),
            }
        ])
    })
    WA.room.area.onLeave("exitToWorkAdventure").subscribe(() => {
        closePopup()
        WA.room.hideLayer("haloExitWorkAdventure")
    })

    WA.room.area.onEnter("exitToFalcon").subscribe(() => {
        currentPopup = WA.ui.openPopup("exitToFalconPopup", "Fly away with the Millennium Falcon?", [
            {
                label: 'Take off',
                className: 'primary',
                callback: () => WA.nav.goToRoom("/@/falcon#from-metadventure"),
            }
        ])
    })
    WA.room.area.onLeave("exitToFalcon").subscribe(closePopup)

    WA.room.area.onEnter("exitToPokerverse").subscribe(() => {
        /*currentPopup = WA.ui.openPopup("exitToPokerversePopup", "Ready to make history?", [
            {
                label: "Take me to PokerVerse",
                className: 'primary',
                callback: () => WA.nav.goToRoom("/@/pokerverse"),
            }
        ])*/
        currentPopup = WA.ui.openPopup("exitToPokerversePopup", "Ready to make history? (12.2 - 6pm CET)", [])
    })
    WA.room.area.onLeave("exitToPokerverse").subscribe(closePopup)

    // Roofs
    WA.room.area.onEnter("Office").subscribe(() => {
        WA.room.hideLayer("roofOffice0");
        WA.room.hideLayer("roofOffice1");
        WA.room.hideLayer("roofOffice2");

        WA.room.showLayer("roofOfficeOverlay");
    })
    WA.room.area.onLeave("Office").subscribe(() => {
        WA.room.showLayer("roofOffice0");
        WA.room.showLayer("roofOffice1");
        WA.room.showLayer("roofOffice2");

        WA.room.hideLayer("roofOfficeOverlay");
    })

    WA.room.area.onEnter("NFTs").subscribe(() => {
        WA.room.hideLayer("roofNFT0");
        WA.room.hideLayer("roofNFT1");
        WA.room.hideLayer("roofNFT2");

        WA.room.showLayer("roofNFTOverlay");
    })
    WA.room.area.onLeave("NFTs").subscribe(() => {
        WA.room.showLayer("roofNFT0");
        WA.room.showLayer("roofNFT1");
        WA.room.showLayer("roofNFT2");

        WA.room.hideLayer("roofNFTOverlay");
    })

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close()
        currentPopup = undefined
    }
}

export {};
