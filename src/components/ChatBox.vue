<template>
    <!-- chat robot -->
    <div class="chat-robot">
        <div class="chat-robot-btn" @click="chatToggle()">
            <img class='chat-icon' src="../assets/image/news-img/chat-icon.png" alt="對話圖示">
        </div>
        <!-- <div class="close-chat-btn"></div> -->
        <!-- chat field -->
        <div class="chat-field" v-show="isrobBtn === true">
            <div class="chat-intro-field">
                <h2 class="chat-title">客服小助手</h2>
                <p class="chat-intro">您好!如果有任何問題或要求，請隨時跟我們聯絡。</p>
            </div>
            <input type="text" name="" placeholder="請輸入關鍵字" v-model="chatMeg" required>
            <button class="submit-btn" v-on:click.prevent="userMeg()"><i class="fa-solid fa-paper-plane"
                    style="color: #144433;"></i></button>

            <div class="chat-area">
                <p class="text" v-for="item in chatData" :key="item"
                    :class="{ user: item.author === 'user', robot: item.author !== 'user' }">
                    {{ item.message }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isrobBtn: false,
            chatMeg: '',
            chatData: [{
                message: '您好!',
                author: 'robot',
            },
            {
                message: '您好!',
                author: 'user',
            },
            {
                message: '您好!',
                author: 'robot',
            }
            ],
        }
    },
    methods: {

        userMeg() {
            if (this.chatMeg === '') {
                return
            } else {
                this.chatData.push({ message: this.chatMeg, author: 'user' });
                this.chatMeg = '';
                console.log(this.chatData)
            }
        },
        chatToggle() {
            this.isrobBtn = !this.isrobBtn;
        }
    },
    computed: {

    },


}
</script>
<style lang="scss" scoped>
.chat-robot {
    position: sticky;
    left: 20px;
    bottom: 20px;
    width: 110px;
    height: 110px;
    z-index: 101;

    .chat-robot-btn {
        position: relative;
        width: 110px;
        height: 110px;
        border-radius: 100%;
        border: 1px solid $darkGreen;
        background-color: #fff;
        background-image: url(../assets/image/news-img/chat-robot-img.png);
        background-position: 20px center;
        background-repeat: no-repeat;
        position: relative;
        cursor: pointer;

        .chat-icon {
            position: absolute;
            right: 15px;
            top: 20px;
            cursor: pointer;
        }

    }
}

// chat field 
.chat-field {
    width: 450px;
    bottom: 120px;
    left: 55px;
    position: absolute;
    border-radius: 20px;
    border: 1px solid $darkGreen;

    .chat-intro-field {
        text-align: center;
        background-color: $darkGreen;
        color: #fff;
        padding: 30px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        position: relative;

        .chat-title {
            margin-bottom: 35px;
            font-size: $fontBase;
            font-family: inherit;
        }

        .chat-intro {
            font-size: 12px;
        }
    }

    input[type="text"] {
        position: absolute;
        top: 110px;
        right: 50%;
        transform: translateX(50%);
        width: 80%;
        padding: 10px 25px 10px 10px;
        border-radius: 5px;
        border: 1px solid #eee;
    }

    .submit-btn {
        position: absolute;
        top: 120px;
        right: 30px;
        background-color: transparent;
        border: none;
        cursor: pointer
    }

    .chat-area {
        width: 100%;
        height: 230px;
        overflow: scroll;
        padding: 30px;
        box-sizing: border-box;
        background-color: #fff;

        .text {
            background-color: $lightGreen;
            color: #fff;
            width: 100%;
            padding: 15px 20px;
            display: block;
            word-wrap: break-word;
            margin-bottom: 10px;
            border-radius: 60px;
            border-bottom-right-radius: 0px;
            box-sizing: border-box;
            font-size: $fontBase;
        }

        .robot {
            border-bottom-right-radius: 60px;
            border-bottom-left-radius: 0px;
            background-color: #fff;
            border: 1px solid $darkGreen;
            color: black;
        }
    }
}



// ::-webkit-scrollbar {
//     width: 10px;
// }</style>