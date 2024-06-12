<script></script>

<template>
    <section>
        <div class="wrapper">
            <div class="member-context">
                <div class="member-pic">
                    <!-- <img :src="member.image" /> -->
                    <img src="/src/assets/image/memberPic.png">
                </div>
                <span class="member-name">方老伯</span>
                <div class="btn-selection">
                    <button class="btn-info">個人資料</button>
                    <button class="btn-like">收藏項目</button>
                    <button class="btn-order">訂單紀錄</button>
                    <button class="btn-activity">活動紀錄</button>
                </div>
                <div class="logout">
                    <button class="btn-logout">登出<i class="fa-solid fa-arrow-right-from-bracket"></i></button>
                </div>
            </div>
        </div>
    </section>

</template>


<style lang="scss" scoped>
.wrapper {
    position: relative;
    max-width: 768px;
    width: 100%;
    height: 480px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
        0 10px 10px rgba(0, 0, 0, .2);
    background-color: #F5F4EA;
    box-sizing: border-box;
    margin: 0 auto;
}

.member-context {
    position: absolute;
    width: 300px;
    height: 100%;
    left: 0;
    background-color: #144433;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .btn-selection {
        margin: 20px 0 30px;
    }

    .member-pic {
        margin-bottom: 25px;
        width: 125px;
        height: 125px;

        img {
            width: 100%;
            vertical-align: top;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    .member-name {
        font-size: 24px;
        font-family: $titleFont;
        color: #fff;
    }

    button {
        border-radius: 25px;
        border: none;
        // border: 1px solid #eee;
        background-color: #144433;
        color: #fff;
        font-size: 14px;
        font-family: $titleFont;
        // font-weight: bold;
        padding: 6px 30px;
        display: block;
        letter-spacing: 1.5px;
        cursor: pointer;
        transition: transform .1s ease-in;
        margin: 6px 0;

        &:hover {
            background-color: #357A56;
        }

        &:focus {
            outline: none;
        }
    }

    .btn-logout {
        background-color: #E76900;
        border: 1px solid #666;
        padding: 6px 30px;

        &:hover {
            background-color: #E76900;
        }

        i {
            font-size: 12px;
            margin: 0 3px;
        }
    }
}
</style>