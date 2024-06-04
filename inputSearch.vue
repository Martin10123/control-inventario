<template>
  <div class="relative">
    <div class="flex items-center">
      <input
        type="text"
        class="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Buscar..."
        v-model="search"
        @input="filterOptions"
      />
    </div>

    <!-- Contenedor para mostrar las opciones seleccionadas -->
    <div
      class="flex gap-1 snap-x snap-mandatory m-2 overflow-x-auto p-2 shadow-md bg-white rounded-md"
      v-if="optionsSelected.length > 0"
    >
      <span
        v-for="option in optionsSelected"
        :key="option.toString()"
        @click="() => onCopyOption(option.toString())"
        class="flex items-center justify-center inline-block cursor-pointer bg-slate-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 snap-always shrink-0 snap-center"
      >
        {{ option }}
        <button
          class="flex items-center justify-center ml-2 bg-transparent text-red-500 bg-slate-200 text-gray-700 rounded-full transition-colors duration-300"
          @click="() => removeSelectedOption(option.toString())"
        >
          X
        </button>
      </span>
    </div>

    <ul
      class="absolute w-full bg-white border border-gray-300 rounded-md mt-1 shadow-md max-h-80 overlay-y-scroll overflow-y-auto z-10"
      v-if="search.length > 0"
    >
      <li
        class="py-2 px-3 hover:bg-gray-100 cursor-pointer"
        v-for="option in filteredOptions"
        :key="option"
        :class="{ 'bg-blue-300 hover:bg-blue-400': optionsSelected.includes(option) }"
        @click="() => onSelectOption(option)"
      >
        {{ option }}

        <span v-if="optionsSelected.includes(option)" class="float-right text-white"> ✓ </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useInputSearch } from '@/composables/useInputSearch';
import { ref } from 'vue';

const { options, searchP } = defineProps<{
  options: string[];
  searchP: string;
}>();

const search = ref(searchP);

const {
  filterOptions,
  filteredOptions,
  onCopyOption,
  onSelectOption,
  optionsSelected,
  removeSelectedOption,
} = useInputSearch({ search: search.value, options });
</script>

// useInputSearch

import { ref } from 'vue';

export const useInputSearch = ({ search, options }: {
    search: string,
    options: string[]
}) => {
    const optionsSelected = ref<String[]>([]);

    const filteredOptions = ref(options);

    const removeAccents = (str: string) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };

    const filterOptions = () => {
        const normalizedSearch = removeAccents(search.toLowerCase());

        filteredOptions.value = options.filter((option) => {
            const normalizedOption = removeAccents(option.toLowerCase());
            return normalizedOption.includes(normalizedSearch);
        });

        if (filteredOptions.value.length === 0) {
            filteredOptions.value = ['No se encontraron resultados'];
        }
    };

    const onSelectOption = (option: string) => {
        if (optionsSelected.value.includes(option)) {
            optionsSelected.value = optionsSelected.value.filter((item) => item !== option);
        } else {
            optionsSelected.value = [...optionsSelected.value, option];
        }
    };

    const removeSelectedOption = (option: string) => {
        optionsSelected.value = optionsSelected.value.filter((item) => item !== option);
    };

    const onCopyOption = (option: string) => {
        navigator.clipboard.writeText(`Cotecmar/${option}`);
    };

    return {
        optionsSelected,
        filteredOptions,
        filterOptions,
        onSelectOption,
        removeSelectedOption,
        onCopyOption,
    };

}
