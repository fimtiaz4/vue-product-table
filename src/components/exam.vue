<script setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import Swal from 'sweetalert2'

const showAlert = (type, message) => {
  Swal.fire({
    title: "Live Test",
    text: "Successfully Done",
    icon: "success",
    confirmButtonText: 'Sweet'
  })  
} 

const notify = (message) => {
  toast(message, {
    autoClose: 1000,
    position: toast.POSITION.BOTTOM_RIGHT,
    transition: toast.TRANSITIONS.SLIDE,
  });
}
</script>

<template>
  <button @click="notify('Toast message Created!')">Show Toast Message</button>
  
  <button @click="showAlert('success', 'Successfully Done')">Show Success Alert</button>
</template>

<Style scoped>
</Style>

<!-- Package Installed -->
<!-- =================================== -->
<!-- npm install sweetalert2 -->
<!-- npm install vue3-toastify -->