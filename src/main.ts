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
    WA.room.area.onLeave("Llamaverse").subscribe(() => {closePopup(); WA.nav.closeCoWebSite()})

    WA.room.area.onEnter("FestAdventure").subscribe(() => {
        currentPopup = WA.ui.openPopup("FestAdventurePopup", "Visit FestAdventure", [
            {
                label: 'Teleport',
                className: 'primary',
                callback: () => WA.nav.goToRoom("/@/festadventure"),
            }
        ])
    })
    WA.room.area.onLeave("FestAdventure").subscribe(() => {closePopup(); WA.nav.closeCoWebSite()})

    WA.room.area.onEnter("NFTFactory").subscribe(() => {
    currentPopup = WA.ui.openPopup("NFTFactoryPopup", "Visit NFT Factory", [
        {
            label: 'Teleport',
            className: 'primary',
            callback: () => WA.nav.goToRoom("/@/nft-factory#from-metadventure"),
        }
    ])
    })
    WA.room.area.onLeave("NFTFactory").subscribe(() => {closePopup(); WA.nav.closeCoWebSite()})

    WA.room.area.onEnter("ComingSoon").subscribe(() => {
        currentPopup = WA.ui.openPopup("ComingSoonPopup", "Coming Soon!", [])
    })
    WA.room.area.onLeave("ComingSoon").subscribe(() => {closePopup(); WA.nav.closeCoWebSite()})

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
