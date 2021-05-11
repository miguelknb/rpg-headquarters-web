export const selectPlayerImage = (player) => {
    let currentImg;
    console.log('alpha', player);
    if (!player) return null;
    const healthPercentage = player.currentHealth/player.maxHealth * 100;

    
    if (player?.isInsane)    {
        if (healthPercentage <= 20) currentImg = player.imgUrl_insane_dyingl;
        else if (healthPercentage <= 60) currentImg = player.imgUrl_insane_hurt;
        else currentImg = player.imgUrl_insane_normal;
    }
    else {
        console.log('estou aqui?', healthPercentage)
        if (healthPercentage <= 20) currentImg = player.imgUrl_sane_dying;
        else if (healthPercentage <= 60) currentImg = player.imgUrl_sane_hurt;
        else currentImg = player.imgUrl_sane_normal;
    }

    return currentImg;
}