<template>
  <div style="display: flex;">
    <div class="tuli">
      <div class="complete" /><div>已完成</div>
    </div>
    <div class="tuli">
      <div class="executing" /><div>执行中</div>
    </div>
    <div class="tuli">
      <div class="exception" /><div>异常</div>
    </div>
    <div class="tuli">
      <div class="unexecuted" /><div>未执行</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Legend'
}
</script>

<style scoped>
.tuli{
  display: flex;
  margin-right: 10px;
  align-items: center;
  font-size: 14px;
  /*gap: 5px;*/
}
.unexecuted{
  width: 18px;
  height: 18px;
  opacity: 1;
  border-radius: 15px;
  background: rgba(227, 227, 227, 1);
  border: 1px solid rgba(128, 128, 128, 1);
  margin-right: 5px;
}
.exception{
  width: 18px;
  height: 18px;
  opacity: 1;
  border-radius: 15px;
  background: rgba(252, 226, 220, 1);
  border: 1px solid rgba(255, 87, 51, 1);
  margin-right: 5px;
}
.executing{
  width: 18px;
  height: 18px;
  opacity: 1;
  border-radius: 15px;
  background: rgba(214, 255, 231, 1);
  border: 1px solid rgba(67, 207, 124, 1);
  margin-right: 5px;
}
.complete{
  width: 18px;
  height: 18px;
  opacity: 1;
  border-radius: 15px;
  background: rgba(217, 234, 252, 1);
  border: 1px solid rgba(42, 130, 228, 1);
  margin-right: 5px;
}
</style>
