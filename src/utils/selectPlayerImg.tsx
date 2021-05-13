export const selectPlayerImage = (player) => {
    let currentImg;
    if (!player) return null;
    const healthPercentage = player.currentHealth/player.maxHealth * 100;

    if (healthPercentage <= 1) return player.imgUrl_dead;
    
    if (player?.isInsane)    {
        if (healthPercentage <= 20) currentImg = player.imgUrl_insane_dying;
        else if (healthPercentage <= 50) currentImg = player.imgUrl_insane_hurt;
        else currentImg = player.imgUrl_insane_normal;
    }
    else {
        if (healthPercentage <= 20) currentImg = player.imgUrl_sane_dying;
        else if (healthPercentage <= 50) currentImg = player.imgUrl_sane_hurt;
        else currentImg = player.imgUrl_sane_normal;
    }

    return currentImg;
}