import { bootstrapExtra } from "@workadventure/scripting-api-extra";

    var currentPopup = undefined;
    var isCoWebSiteOpened =  false;
    var urlMusikClassic ="https://www.youtube-nocookie.com/embed/5kRmqOSgapg?autoplay=1";
    var urlMusikModern = "https://www.youtube-nocookie.com/embed/5kRmqOSgapg?autoplay=1";

    function closePopUp(){
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }
    }

    var zoneMusikClassic = "music_classic";
    var zoneMusikModern = "music_modern";
    var zoneDirections = "directions";
    var zoneDirections1 = "directions1";
    var zoneDirections2 = "directions2";

    WA.room.onEnterZone(zoneMusikClassic, () => {
    currentPopup =  WA.ui.openPopup("popUpMusicClassic","Klassische Weihnachtslieder?!",[
            {
                label: "Her damit!",
                callback: (popup => {
                    WA.nav.openCoWebSite(urlMusikClassic, false, "autoplay; encrypted-media");
                    isCoWebSiteOpened = true;
                    closePopUp();
                })
            }]);
    })

    WA.room.onLeaveZone(zoneMusikClassic, () =>{
        closePopUp();

        if (isCoWebSiteOpened) {
            WA.nav.closeCoWebSite();
            isCoWebSiteOpened = false;
        }
    })

    WA.room.onEnterZone(zoneMusikModern, () => {
    currentPopup =  WA.ui.openPopup("popUpMusicModern","Weihnachtslieder?!",[
            {
                label: "Her damit!",
                callback: (popup => {
                    WA.nav.openCoWebSite(urlMusikModern, false, "autoplay; encrypted-media");
                    isCoWebSiteOpened = true;
                    closePopUp();
                })
            }]);
    })

    WA.room.onLeaveZone(zoneMusikModern, () =>{
        closePopUp();

        if (isCoWebSiteOpened) {
            WA.nav.closeCoWebSite();
            isCoWebSiteOpened = false;
        }
    })

    WA.room.onEnterZone(zoneDirections, () => {
    currentPopup =  WA.ui.openPopup("popUpDirections","Wegweiser:\n\nNordosten: Kleiner Weihnachtsmarkt an der Kirche\n\nS??dosten: Der mittelalterliche Weihnachtsmarkt hei??et euch Willkommen!\n\nS??dwesten: Gro??er Parkweihnachtsmarkt\n\nNordwesten: Die Eisbahn wartet auf dich!",[
            {
                label: "OK",
                callback: (popup => {
                    closePopUp();
                })
            }]);
    })

    WA.room.onLeaveZone(zoneDirections, () =>{
        closePopUp();

        if (isCoWebSiteOpened) {
            WA.nav.closeCoWebSite();
            isCoWebSiteOpened = false;
        }
    })

    WA.room.onEnterZone(zoneDirections1, () => {
    currentPopup =  WA.ui.openPopup("popUpDirections1","Wegweiser:\n\nNordosten: Kleiner Weihnachtsmarkt an der Kirche\n\nS??dosten: Der mittelalterliche Weihnachtsmarkt hei??et euch Willkommen!\n\nS??dwesten: Gro??er Parkweihnachtsmarkt\n\nNordwesten: Die Eisbahn wartet auf dich!",[
            {
                label: "OK",
                callback: (popup => {
                    closePopUp();
                })
            }]);
    })

    WA.room.onLeaveZone(zoneDirections1, () =>{
        closePopUp();

        if (isCoWebSiteOpened) {
            WA.nav.closeCoWebSite();
            isCoWebSiteOpened = false;
        }
    })

    WA.room.onEnterZone(zoneDirections2, () => {
    currentPopup =  WA.ui.openPopup("popUpDirections2","Wegweiser:\n\nNordosten: Kleiner Weihnachtsmarkt an der Kirche\n\nS??dosten: Der mittelalterliche Weihnachtsmarkt hei??et euch Willkommen!\n\nS??dwesten: Gro??er Parkweihnachtsmarkt\n\nNordwesten: Die Eisbahn wartet auf dich!",[
            {
                label: "OK",
                callback: (popup => {
                    closePopUp();
                })
            }]);
    })

    WA.room.onLeaveZone(zoneDirections2, () =>{
        closePopUp();

        if (isCoWebSiteOpened) {
            WA.nav.closeCoWebSite();
            isCoWebSiteOpened = false;
        }
    })

