event.addListener("PlayerJoinEvent", event => {
    const player = event.getPlayer();
    player.sendMessage(color(`&7Hi there, &a${player.getName()}&7! Thanks for joining us today!`));
});
