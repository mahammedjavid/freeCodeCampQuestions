const Window = function(tabs){
    this.tabs = tabs
}


// Joining  Tab
Window.prototype.join = function(otherTabs){
    this.tabs = this.tabs.concat(otherTabs.tabs)
    return this
}

// Opening the new tab

Window.prototype.tabOpen = function(newTab){
    this.tabs.push(newTab)
    return this
}

Window.prototype.closeTab = function(index){
    
    // tabs before index
    const tabsBeforeIndex = this.tabs.splice(0,index)

    // tabs after index
    const tabsAfterIndex = this.tabs.splice(1)

    return this
}


const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);


const finalTabs = socialWindow.tabOpen("newTAB-1").join(videoWindow.closeTab(2)).join(workWindow.closeTab(1).tabOpen("newTAb-2"));
console.log(finalTabs.tabs);