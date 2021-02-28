<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="red"
      color="white"
      dark
      centered
      mobile-breakpoint
      slider-color="white"
    >
      <v-tab
        
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
        transition="false"
      >
        <v-card>
            <CategoryProduct :categories="item.tab" :key="componentKey" />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import CategoryProduct from '@/components/publicArea/CategoryProduct'

export default {
    name: 'SubMenu',
    components: {CategoryProduct},
    data: () => {
        return {
            componentKey: 0,
            tab: null,
            items: [
                { tab: 'Quentinha', content: 'Tab 1 Content' },
                { tab: 'Bebidas', content: 'Tab 2 Content' },
                { tab: 'Doces', content: 'Tab 3 Content' },
            ],
        }
    },
}
</script>
<style>
    
</style>