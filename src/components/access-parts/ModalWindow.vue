<script setup>
defineProps({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
})

const emit = defineEmits(['submit-message', 'close-modal'])
function submitMessage() {
  emit('submit-message')
}
function closeModal() {
  emit('close-modal')
}

</script>

<template>
  <div class="modal-background">
    <div class="modal-container">
      <p class="modal-message">以下の内容で送信します。</p>
      <div class="box-parent">
        <div class="title">お名前：</div>
        <div class="box">{{name}}</div>
        <div class="title">メールアドレス：</div>
        <div class="box">{{email}}</div>
        <div class="title message-title"><p>メッセージ：</p></div>
        <div class="box message-box">{{message}}</div>
      </div>
      <div class="buttons">
        <button @click="submitMessage">送信する</button>
        <button @click="closeModal">送信しない</button>
      </div>
      <div class="small">送信ボタンはダミーなので送信されません</div>
    </div>
  </div>
</template>

<style scoped>
.modal-background {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}
.modal-container {
  background-color: #fff;
  color: black;
  padding: 20px;
  width: 50vw;
  overflow-y: scroll;
}
.modal-message {
  margin-bottom: 20px;
}
.box-parent {
  display: flex;
  flex-wrap: wrap;
}
.title {
  margin-left: 5px;
}
.box {
  overflow-wrap: break-word;
  overflow-y: scroll;
  margin-bottom: 10px;
  height: 28px;
}
.message-box {
  height: 100px;
}
.buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  border-top: 1px solid #333;
  padding-top: 10px;
}
.buttons button {
  font-size: var(--buton-text-size);
}
.small {
  font-size: var(--font-size-small);
  margin-top: 10px;
}

@media(min-width: 768px) {
  .title {
    width: 35%;
  }
  .box {
    width: 60%;
  }
}

@media(max-width: 767.5px) {
  .title {
    width: 130px;
  }
  .box {
    width: 90%;
    margin-left: 5%;
  }
}

@media(max-width: 500px) {
  .modal-container {
    width: 60vw;
    height: 70vh;
  }
}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  .modal-container {
    font-size: var(--sp-font-size-h2);
    width: 80vw;
    height: 80vh;
    padding: 5vh 5vw
  }
  .modal-container button {
    font-size: var(--sp-buton-text-size-large);
    border: 2px solid #003399;
    border-radius: 10px;
  }
  .modal-container button:first-child {
    border: 5px solid #0033cc;
  }
  .title {
    width: 60vw;
  }
  .box {
    width: 90%;
    margin-left: 5%;
    height: 10vw;
  }
  .message-box {
    height: 20vh;
  }
  .small {
    font-size: var(--sp-font-size-p-medium);
    margin-top: 1vh;
  }
}
</style>
