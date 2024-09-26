import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/searchInput";
import EmptyState from "../../components/emptyState";
import { FetchPostsType, useFetchPosts } from "../../hooks/useFetchPosts";
import VideoCard from "../../components/videoCard";
import Trending from "../../components/trending";

const Home = () => {
  const { data, isLoading, refetch, refreshing }: FetchPostsType =
    useFetchPosts();
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={data}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            creator={item.creator.username}
            avatar={item.creator.avatar}
            thumbnail={item.thumbnail}
            video={item.video}
          />
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6 flex-column">
            <View className="justify-between items-start flex-row">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back{" "}
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Piyush
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <View>
              <SearchInput
                initialQuery={""}
                placeholder="Search a video topic"
              />
            </View>
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Latest Videos
              </Text>

              <Trending posts={data ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refetch} />
        }
      >
        Home
      </FlatList>
    </SafeAreaView>
  );
};

export default Home;
