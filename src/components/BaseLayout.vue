<template>
    <div id="wrapper">
        <div id="baseLayout">
            <AHeader @gotoPage="gotoPage"></AHeader>
            <AContent></AContent>
            <AFooter></AFooter>
        </div>
    </div>
</template>
<script>
    import AContent from "./AContent";
    import AHeader from "./AHeader";
    import AFooter from "./AFooter";
    import router from "../router";

    export default {
        name: "BaseLayout",
        components: {
            AFooter,
            AHeader,
            AContent
        },
        setup() {
            const gotoPage = (path) => {
                router.push(path)
            };
            return {
                gotoPage
            }
        },
        data() {
            return {}
        },
    }
</script>

<style lang="scss">
    @import "../style/BaseLayout.scss";
</style>
