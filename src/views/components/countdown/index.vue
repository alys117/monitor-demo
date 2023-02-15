<template>
  <div class="countdown">
    <span v-if="false">{{ `${day}天` }}</span>
    <div class="flex-center time" :style="{'--color': colored}">
      <div class="text">{{ hr_ }}</div>
      <div class="text">{{ min }}</div>
      <div class="text">{{ sec }}</div>
    </div>
    <div class="flex-center" style="color: black;font-size: 12px;gap: 20px">
      <div class="text">时</div>
      <div class="text">分</div>
      <div class="text">秒</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Countdown',
  props: {
    end: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      day: 0,
      hr: 0,
      hr_: 0,
      min: 0,
      sec: 0
    }
  },
  computed: {
    colored() {
      if (this.hr_ === '--') {
        return `rgba(0, 0, 0, 1)`
      } else if (this.hr_ < 1 && this.min < 30) {
        return `rgba(255, 87, 51, 1)`
      } else if (this.hr_ < 1 && this.min > 30) {
        return `rgba(255, 141, 26, 1)`
      } else {
        return `rgba(42, 130, 228, 1)`
      }
    }
  },
  mounted() {
    this.countdown()
  },
  methods: {
    countdown() {
      // 目标日期时间戳
      // const end = Date.parse(new Date(this.time))
      // const end = Date.parse(new Date('2023-09-01 00:00:00'))
      const end = this.end
      // 当前时间戳
      // const now = Date.parse(new Date())
      const now = new Date().getTime()
      // 相差的毫秒数
      const msec = end - now

      if (msec < 0) {
        this.hr_ = '--'
        this.hr = '--'
        this.day = '--'
        this.min = '--'
        this.sec = '--'
        return
      }

      // 计算时分秒数
      const day = parseInt(msec / 1000 / 60 / 60 / 24)
      const hr = parseInt((msec / 1000 / 60 / 60) % 24)
      const min = parseInt((msec / 1000 / 60) % 60)
      const sec = parseInt((msec / 1000) % 60)
      // 个位数前补零
      this.day = day
      this.hr = hr > 9 ? hr : '0' + hr
      this.hr_ = day * 24 + hr > 9 ? day * 24 + hr : '0' + hr
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
      // 赋值
      const that = this
      if (min >= 0 && sec >= 0) {
        // 倒计时结束关闭订单
        if (min === 0 && sec === 0) {
          return
        }
        // 一秒后递归
        setTimeout(() => {
          that.countdown()
        }, 1000)
      }
    }
  }
}
</script>

<style scoped>
.countdown .time{
  --color: rgba(0, 0, 0, 1);
  font-size: 24px;
  color: var(--color);
  font-weight: 600;
  text-align: center;
  gap: 20px
}
.countdown .text{
  --width: 38px;
  text-align: center;
  width: var(--width);
}
</style>
