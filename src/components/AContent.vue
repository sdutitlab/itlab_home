<template>
    <div id="content">
            <transition appear name="el-fade-in">
                <router-view>
                </router-view>
            </transition>
       <Particles
                id="particles"
                :options="{
                    fpsLimit: 50,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'grab'
                            },
                            resize: true
                        },
                        modes: {
                            // bubble: {
                            //     distance: 200,
                            //     duration: 2,
                            //     opacity: 0.8,
                            //     size: 20
                            // },
                            push: {
                                quantity: 1
                            },
                            grab: {
                                distance: 300,
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#d2e8ff'
                        },
                        links: {
                            color: '#23acde',
                            distance: 200,
                            enable: true,
                            opacity: 0.7,
                            width: 1.5
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 1.5,
                            straight: false
                        },
                        number: {
                            value: 60
                        },
                        opacity: {
                            value: 0.7
                        },
                        shape: {
                            type: 'circle'
                        },
                        size:{
                            value:3.5,
                        },
                    },
                    detectRetina: true
                }"
        ></Particles>
    </div>
</template>

<script>
    export default {
        name: "AContent"
    }
</script>

<style lang="less">
    @import "../style/AContent";
</style>