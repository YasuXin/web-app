<script setup>
import {ref} from "vue";
import ModalWindow from "@/components/access-parts/ModalWindow.vue";

let name = ref("")
let email = ref("")
let message = ref("")
let toggleModal = ref(false)
let toggleToast = ref(false)

function openModal() {
  toggleModal.value = true
}
function closeModal() {
  toggleModal.value = false
}
function submitMessage() {
  name.value = ''
  email.value = ''
  message.value = ''
  toggleModal.value = false
  showToast()
}

function showToast() {
  toggleToast.value = true
  setTimeout(() => {
    toggleToast.value = false;
  }, 3000)
}

</script>

<template>
  <!-- フォーム -->
  <form action="#" method="post" autocomplete="off">
    <label for="name">お名前：</label><br>
    <input v-model="name" type="text" id="name" size="10" name="name" placeholder="your_name(10文字以内"><br>

    <label for="email">Eメールアドレス：</label><br>
    <input :value="email" @input="email = $event.target.value" type="email" id="email" name="email" placeholder="your_email"/><br>

    <label for="message">メッセージ</label><br>
    <textarea :value="message" @input="message = $event.target.value" name="message" id="message" cols="50" rows="10" /><br>

    <input type="submit" name="submit" value="送信" disabled>
  </form>

  <div class="dummy-parent">
    <button @click="openModal" class="dummy-button">送信?</button>
  </div>
  <!-- モーダルウィンドウ -->
  <teleport to="#modal1">
    <transition name="modal">
      <div class="modal-parent" v-show="toggleModal">

        <ModalWindow :name="name" :email="email" :message="message" @submit-message="submitMessage" @close-modal="closeModal"></ModalWindow>

      </div>
    </transition>
  </teleport>

  <!-- ダミーメッセージ送信後のトースト -->
  <teleport to="#submit-message">
    <transition name="toast">
      <div class="toast" v-show="toggleToast">
        <p>メッセージを送信しませんでした！</p>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
input[type="text"], input[type="email"] {
  width: 200px;
}
.dummy-parent {
  display: flex;
  justify-content: start;
  align-items: center;
}
.modal-parent {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  z-index: 3;
}

.toast {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  right: 50px;
  width: 400px;
  height: 100px;
  background-color: #ddd;
  border-radius: 15px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  z-index: 3;
}
.toast p {
  display: inline-block;
  color: var(--color-black);
  text-align: center;
  font-size: var(--font-size-p-large);
}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  input[type="text"], input[type="email"] {
    width: 100%;
  }
  textarea {
    width: 100%;
  }
  .toast {
    width: 100%;
    right: -10%;
    padding: 0 10%;
    margin: 0 10%;
  }
  .toast p {
    font-size: var(--sp-font-size-h2);
  }
  .dummy-button {
    font-size: var(--sp-font-size-h2);
    border-radius: 15px;
    border: 5px solid #6699cc;
    background-image: linear-gradient(45deg, rgb(220,220,230), rgb(250,250,255));
    width: 30vw;
    height: 10vw;
    margin: auto;
  }
}

.modal-enter-active, .modal-leave-active {
  transition: opacity .2s;
}
.modal-enter-from, .modal-leave-to {
  opacity: 0;
}
.modal-enter-to, .modal-leave-from {
  opacity: 1;
}
.toast-enter-active, .toast-leave-active {
  transition: opacity 1s, transform 1s;
}
.toast-enter-from, .toast-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.toast-enter-to, .toast-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
