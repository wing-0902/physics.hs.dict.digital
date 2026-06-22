<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const route = useRoute();

watch(
  () => route.path,
  (newPath, oldPath) => {
    close();
  }
);

// メニューの開閉状態を管理
const isOpen = ref(false);
// メニューの外側をクリックしたときに閉じるための参照
const menuContainer = ref<HTMLElement | null>(null);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// メニューの外側をクリックしたら閉じる処理
const handleClickOutside = (event: MouseEvent) => {
  if (
    menuContainer.value &&
    !menuContainer.value.contains(event.target as Node)
  ) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

const close = () => {
  isOpen.value = false;
};

const handleShare = () => {
  if (navigator.share) {
    navigator
      .share({
        title: '地理探求 - Dictionary_digital',
        url: 'https://geography.hs.dict.digital'
      })
      .catch((error) => {
        console.error('共有に失敗:', error);
      });
  } else {
    alert('このブラウザはWeb Share APIに対応していません．');
  }
  close();
};

// メニュー項目の操作処理
const copyUrlScheme = () => {
  const urlScheme = 'https://geography.hs.dict.digital/content/[slug]';
  navigator.clipboard.writeText(urlScheme).then(
    () => {},
    (err) => {
      console.error('URLスキームのコピーに失敗：', err);
      alert('URLスキームのコピーに失敗しました．');
    }
  );
  close();
};
</script>

<template>
  <div ref="menuContainer" relative inline-block>
    <button
      text-white
      bg-transparent
      border-none
      h-full
      text-5
      cursor-pointer
      @click="toggleMenu"
    >
      <span i-hugeicons-more-horizontal></span>
    </button>

    <Transition name="popup-menu">
      <div
        v-if="isOpen"
        absolute
        right-0
        mt-2
        w-88
        bg-transparent
        rounded-5
        z-50
        overflow-hidden
        class="menu-dropdown"
      >
        <ul list-none p-1 m-0>
          <!-- 区切りは <hr /> で表記 -->
          <li>
            <NuxtLink to="/info/app/"> このAppについて </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/info/contents/"> コンテンツの著作権 </NuxtLink>
          </li>
          <li>
            <a href="/sitemap.xml">サイトマップ</a>
          </li>
          <li>
            <NuxtLink
              to="https://github.com/wing-0902/physics.hs.dict.digital"
              target="_blank"
            >
              <span i-hugeicons-github-01></span>
              GitHub</NuxtLink
            >
          </li>

          <hr />

          <li>
            <button @click="handleShare">共有</button>
          </li>
          <li>
            <button @click="copyUrlScheme">URLスキームをコピー</button>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.menu-dropdown {
  backdrop-filter: blur(4px);
  border: 1px solid var(--codeBack);
  height: 400px;
  max-height: calc(100dvh - 80px);
  ul {
    li {
      margin: 1px;
      list-style: none;
      button,
      a {
        appearance: none;
        -webkit-appearance: none;
        display: block;
        width: 100%;
        height: 40px;
        border-radius: 20px;
        padding: 0.5rem 1rem;
        text-align: left;
        background: transparent;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 0.875rem;
        transition: background-color 0.2s;
        &:hover {
          background-color: var(--codeBack);
        }
      }
    }
    hr {
      margin: 20px 4px;
      color: rgba(255, 255, 255, 0.3);
      height: 0.5px;
    }
  }
}

/* VueのTransition用アニメーション（飛び出すエフェクト） */
.popup-menu-enter-active,
.popup-menu-leave-active {
  transition:
    transform 0.2s ease,
    opacity 0.3s ease;
}

.popup-menu-enter-from,
.popup-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95); /* 上からふわっと出てくる */
}
</style>
