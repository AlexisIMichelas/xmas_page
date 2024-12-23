const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.textContent = '❄';
    snowflake.classList.add('snowflake');

    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.fontSize = Math.random() * 1.5 + 1 + 'rem';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
};

setInterval(createSnowflake, 200);
