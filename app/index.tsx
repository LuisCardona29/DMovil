import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const categories = [
  ['home-outline', 'Casas'],
  ['bed-outline', 'Habitaciones'],
  ['water-outline', 'Playas'],
  ['leaf-outline', 'Naturaleza'],
] as const;

export default function HomeScreen() {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center justify-between px-6 pb-5 pt-3">
          <Text className="text-2xl font-bold text-zinc-900">CasaMia</Text>
          <Pressable className="rounded-full border border-zinc-200 p-2 active:opacity-50">
            <Ionicons name="menu" size={21} color="#27272a" />
          </Pressable>
        </View>

        <Pressable className="mx-5 flex-row items-center rounded-full border border-zinc-200 px-4 py-3 active:opacity-70">
          <Ionicons name="search" size={21} color="#18181b" />
          <View className="ml-3 flex-1">
            <Text className="font-semibold text-zinc-900">¿A dónde vas?</Text>
            <Text className="mt-0.5 text-xs text-zinc-500">Cualquier semana · Huéspedes</Text>
          </View>
          <View className="rounded-full bg-rose-500 p-2">
            <Ionicons name="options" size={15} color="white" />
          </View>
        </Pressable>

        <ScrollView horizontal className="mt-6" contentContainerClassName="gap-6 px-5" showsHorizontalScrollIndicator={false}>
          {categories.map(([icon, label], index) => (
            <Pressable key={label} className={`items-center gap-1 border-b-2 pb-2 active:opacity-50 ${index === 0 ? 'border-zinc-900' : 'border-transparent'}`}>
              <Ionicons name={icon} size={22} color={index === 0 ? '#18181b' : '#71717a'} />
              <Text className={`text-xs ${index === 0 ? 'font-semibold text-zinc-900' : 'text-zinc-500'}`}>{label}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <View className="mt-5 px-5">
          <View className="overflow-hidden rounded-3xl bg-zinc-100">
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85' }}
              className="h-52 w-full"
              contentFit="cover"
            />
            <Pressable className="absolute right-4 top-4 rounded-full bg-white/90 p-2.5 active:opacity-50">
              <Ionicons name="heart-outline" size={22} color="#18181b" />
            </Pressable>
          </View>

          <View className="mt-4 flex-row items-start justify-between">
            <View className="flex-1">
              <Text className="text-base font-bold text-zinc-900">Santa Marta, Colombia</Text>
              <Text className="mt-1 text-zinc-500">Frente al mar · Anfitrión destacado</Text>
              <Text className="mt-1 text-zinc-500">12–17 de septiembre</Text>
              <Text className="mt-2 text-zinc-900"><Text className="font-bold">$420.000 COP</Text> noche</Text>
            </View>
            <View className="flex-row items-center gap-1">
              <Ionicons name="star" size={15} color="#18181b" />
              <Text className="font-medium text-zinc-900">4.92</Text>
            </View>
          </View>

          <View className="mt-7 flex-row items-center rounded-3xl bg-rose-50 p-5">
            <Image source={{ uri: 'https://i.pravatar.cc/160?img=47' }} className="h-12 w-12 rounded-full" />
            <View className="ml-3 flex-1">
              <Text className="font-bold text-zinc-900">Viaja con confianza</Text>
              <Text className="mt-0.5 text-sm text-zinc-600">Estancias revisadas por la comunidad.</Text>
            </View>
            <Ionicons name="shield-checkmark" size={24} color="#e11d48" />
          </View>

          <Text className="mb-3 mt-8 text-xl font-bold text-zinc-900">Inspírate para tu próximo viaje</Text>
          <TextInput
            className="mb-8 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-base text-zinc-900"
            placeholder="Busca una ciudad o experiencia"
            placeholderTextColor="#71717a"
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </ScrollView>

      <View className="flex-row border-t border-zinc-200 bg-white px-4 py-3">
        {[
          ['search', 'Explorar', '#e11d48'],
          ['heart-outline', 'Favoritos', '#71717a'],
          ['person-circle-outline', 'Perfil', '#71717a'],
        ].map(([icon, label, color]) => (
          <Pressable key={label} className="flex-1 items-center gap-1 active:opacity-50">
            <Ionicons name={icon as keyof typeof Ionicons.glyphMap} size={21} color={color} />
            <Text className={`text-xs ${label === 'Explorar' ? 'font-semibold text-rose-600' : 'text-zinc-500'}`}>{label}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}
