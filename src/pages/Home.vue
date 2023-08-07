<template>
    <q-layout view="lHr lpR fFf">

        <q-header class="bg-primary text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="drawer.toggleLeftDrawer" />

                <q-toolbar-title>
                    QnA
                </q-toolbar-title>

                <q-btn dense flat round icon="menu" @click="drawer.toggleRightDrawer" />
            </q-toolbar>
        </q-header>

        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
            <!-- drawer content -->
        </q-drawer>

        <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
            <!-- drawer content -->
        </q-drawer>

        <q-page-container>
            <h1>Hello World!</h1>
            <button @click="Logout">Logout</button>
            <router-view />
        </q-page-container>

    </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'


const router = useRouter()

const Logout = async () => {
    const res = await fetch('http://localhost:3333/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            session_token: localStorage.getItem('token')
        })
    }).then(res => res.json())

    if (res.success) {
        localStorage.removeItem('token')
        router.push('/login')
    } else {
        alert(res.message)
    }
}

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)

const drawer = {
    leftDrawerOpen,
    toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
    },

    rightDrawerOpen,
    toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value
    }
}
</script>

<style scoped>
main {
    padding: 1.5rem;
}

h1 {
    margin-bottom: 1rem;
}
</style>