<template>
    <v-overlay color="rgb(32, 54, 78)" :value="!isLoaded" opacity="1" z-index="100" class="loader loader__overlay">
        <div class="loader__wrapper">
            <div class="loader__train">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                     fill="currentColor" x="0px" y="0px" viewBox="0 0 512 512"
                     style="enable-background:new 0 0 512 512;" xml:space="preserve" class="main-train">
		            <path d="M512,106V76h-30H272h-30v30h30v60h-90V76H92v90H38.787l-4.393,4.394C32.989,171.798,0,205.54,0,271    s32.989,99.202,34.394,100.606L38.787,376H73.51c6.968,34.192,37.272,60,73.491,60c24.508,0,46.305-11.818,60-30.052    C220.695,424.182,242.492,436,267,436s46.305-11.818,60-30.052C340.695,424.182,362.492,436,387,436    c36.219,0,66.522-25.808,73.491-60H512V166h-30v-60H512z M122,106h30v60h-30V106z M189.42,376c-6.192,17.458-22.865,30-42.42,30    c-24.813,0-45-20.187-45-45s20.187-45,45-45c19.555,0,36.228,12.542,42.42,30H132v30H189.42z M267,406    c-19.555,0-36.228-12.542-42.42-30h84.839C303.228,393.458,286.555,406,267,406z M224.58,346c6.192-17.458,22.865-30,42.42-30    s36.228,12.542,42.42,30H224.58z M302,166v-60h60v60H302z M387,406c-19.555,0-36.228-12.542-42.42-30H402v-30h-57.42    c6.192-17.458,22.865-30,42.42-30c24.813,0,45,20.187,45,45S411.813,406,387,406z M452,166h-60v-60h60V166z"/>
                </svg>
                <svg
                        class="railway__train train"
                        height="512pt"
                        fill="currentColor"
                        viewBox="0 -30 512 512"
                        width="512pt"
                        xmlns="http://www.w3.org/2000/svg"
                >
                    <path class="train__weel"
                          d="m134 391.058594c-16.542969 0-30 13.457031-30 30 0 16.542968 13.457031 30 30 30s30-13.457032 30-30c0-16.542969-13.457031-30-30-30zm0 0"/>
                    <path class="train__weel"
                          d="m378 391.058594c-16.542969 0-30 13.457031-30 30 0 16.542968 13.457031 30 30 30s30-13.457032 30-30c0-16.542969-13.457031-30-30-30zm0 0"/>
                    <path class="train__body"
                          d="m497 138.058594h-482c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h16v166c0 32.816406 17.566406 61.523437 43.804688 77.25 4.671874-28.460938 29.429687-50.25 59.195312-50.25 33.085938 0 60 26.914062 60 60 0 1.003906-.027344 2.003906-.074219 3h124.148438c-.046875-.996094-.074219-1.996094-.074219-3 0-33.085938 26.914062-60 60-60 29.765625 0 54.523438 21.789062 59.195312 50.25 26.238282-15.726563 43.804688-44.433594 43.804688-77.25v-166h16c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15zm-376 177.597656c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-92.058594c0-8.28125 6.714844-15 15-15s15 6.71875 15 15zm60 0c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-92.058594c0-8.28125 6.714844-15 15-15s15 6.71875 15 15zm60 0c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-92.058594c0-8.28125 6.714844-15 15-15s15 6.71875 15 15zm60 0c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-92.058594c0-8.28125 6.714844-15 15-15s15 6.71875 15 15zm60 0c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-92.058594c0-8.28125 6.714844-15 15-15s15 6.71875 15 15zm60 0c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-92.058594c0-8.28125 6.714844-15 15-15s15 6.71875 15 15zm0 0"
                    />
                    <path class="train__coal"
                          d="m284.183594 108.058594h125.152344l-33.027344-38.371094c-8.808594-10.234375-20.601563-15.640625-34.105469-15.640625-13.5 0-25.296875 5.40625-34.105469 15.640625l-27.957031 32.484375-56.859375-82.671875c-8.519531-12.394531-22.035156-19.5-37.078125-19.5-15.039063 0-28.554687 7.105469-37.074219 19.5l-60.90625 88.558594zm0 0"
                    />

                </svg>
                <svg
                        class="railway__train train"
                        height="512pt"
                        fill="currentColor"
                        viewBox="0 -30 512 512"
                        width="512pt"
                        xmlns="http://www.w3.org/2000/svg"
                >
                    <path class="train__weel"
                          d="m134 391.058594c-16.542969 0-30 13.457031-30 30 0 16.542968 13.457031 30 30 30s30-13.457032 30-30c0-16.542969-13.457031-30-30-30zm0 0"/>
                    <path class="train__weel"
                          d="m378 391.058594c-16.542969 0-30 13.457031-30 30 0 16.542968 13.457031 30 30 30s30-13.457032 30-30c0-16.542969-13.457031-30-30-30zm0 0"/>

                    <path class="train__body"
                          d="m497 138.058594h-482c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h16v166c0 32.816406 17.566406 61.523437 43.804688 77.25 4.671874-28.460938 29.429687-50.25 59.195312-50.25 33.085938 0 60 26.914062 60 60 0 1.003906-.027344 2.003906-.074219 3h124.148438c-.046875-.996094-.074219-1.996094-.074219-3 0-33.085938 26.914062-60 60-60 29.765625 0 54.523438 21.789062 59.195312 50.25 26.238282-15.726563 43.804688-44.433594 43.804688-77.25v-166h16c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15zm-376 177.597656c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-92.058594c0-8.28125 6.714844-15 15-15s15 6.71875 15 15zm60 0c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-92.058594c0-8.28125 6.714844-15 15-15s15 6.71875 15 15zm60 0c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-92.058594c0-8.28125 6.714844-15 15-15s15 6.71875 15 15zm60 0c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-92.058594c0-8.28125 6.714844-15 15-15s15 6.71875 15 15zm60 0c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-92.058594c0-8.28125 6.714844-15 15-15s15 6.71875 15 15zm60 0c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-92.058594c0-8.28125 6.714844-15 15-15s15 6.71875 15 15zm0 0"
                    />

                    <path class="train__coal"
                          d="m284.183594 108.058594h125.152344l-33.027344-38.371094c-8.808594-10.234375-20.601563-15.640625-34.105469-15.640625-13.5 0-25.296875 5.40625-34.105469 15.640625l-27.957031 32.484375-56.859375-82.671875c-8.519531-12.394531-22.035156-19.5-37.078125-19.5-15.039063 0-28.554687 7.105469-37.074219 19.5l-60.90625 88.558594zm0 0"
                    />

                </svg>
            </div>
            <div class="railway__wrapper">
                <div class="railway__road"></div>
            </div>
            <div class="loader__text">
                <span>Загрузка</span>
                <span class="loader__dot">.</span>
                <span class="loader__dot">.</span>
                <span class="loader__dot">.</span>
            </div>
        </div>
    </v-overlay>
</template>
<script>
    export default {
        name: "Loader",
        props: {
            isLoaded: {
                type: Boolean,
                default: false,
                required: true
            }
        }
    }
</script>

<style lang="scss">
    $background: rgb(32, 54, 78);
    $color: #fff;
    @keyframes road {
        from {
            transform: translateX(-12.5rem);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes coal {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-6px);
        }
    }

    @keyframes weel {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-3px);
        }
    }

    @keyframes main-train {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-1px);
        }
    }

    @keyframes body {
        0%, 100% {
            transform: translateY(-2px) rotateZ(-2deg);
        }
        50% {
            transform: translateY(2px) rotateX(2deg);
        }
    }

    @keyframes blink {
        0%, 100% {
            opacity: .2;
        }
        20% {
            opacity: 1;
        }
    }

    @keyframes trainAppear {
        from {
            transform: translateX(25rem);
        }
        to {
            transform: translateX(0);
        }
    }

    .loader {
        z-index: 5000;


        .railway {
            &__train {
                width: 3.25rem;
                height: 3.25rem;
                fill: $color;
            }

            &__road {
                border-bottom: 3px dashed $color;
                width: 25rem;
                animation: road 4s linear infinite;
            }

            &__wrapper {
                position: relative;
                display: flex;
                flex-direction: column;
                max-width: 12.5rem;
                overflow: hidden;
                width: 12.5rem;

                &:before, &:after {
                    position: absolute;
                    width: 2rem;
                    height: 3px;
                    bottom: 0;
                    content: '';
                    z-index: 100;
                }

                &:before {
                    left: 0;
                    background: linear-gradient(to left, rgba($background, 0), rgba($background, 1));

                }

                &:after {
                    right: 0;
                    background: linear-gradient(to right, rgba($background, 0), rgba($background, 1));
                }
            }
        }

        .main-train {
            margin-right: .125rem;
            animation: main-train 1.5s linear infinite;
            transform-origin: center;
            height: 3.5rem;
            fill: #fff;
            will-change: transform;
        }

        .train {
            margin-right: .125rem;

            &__coal {
                /*fill: #2b2b2b;*/
                animation: coal .75s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
            }

            &__weel {
                /*fill: #222;*/
                &:nth-child(1) {
                    animation: weel 1.5s linear infinite .25s;
                }

                &:nth-child(2) {
                    animation: weel .75s linear infinite;
                }
            }

            &__body {
                /*fill: rgb(32, 54, 78) !important;*/
                animation: body 1.5s linear infinite;
                transform-origin: center;
            }
        }

        &__text {
            padding-top: .75rem;
            color: #fff;
            font-size: .75rem;
            position: relative;
            transition: .3s ease-in-out;
        }

        &__dot {
            animation-name: blink;
            animation-fill-mode: both;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            position: absolute;
            right: -4px;

            &:nth-child(2) {
                animation-delay: .5s;
                right: -8px;
            }

            &:nth-child(3) {
                animation-delay: 1s;
                right: -12px;
            }
        }

        &__overlay {
            display: flex;
            flex-grow: 1;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            opacity: 1;
            transition: .45s ease-in-out;
            z-index: 5000;
        }

        &__wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 12.5rem;
            overflow: hidden;
            max-width: 12.5rem;
            z-index: 5000;
        }

        &__train {
            display: flex;
            transform: translateX(25rem);
            transition: .3s ease-in-out;
            animation: trainAppear .5s;
            animation-fill-mode: forwards;
            animation-iteration-count: 1;
        }

    }


</style>