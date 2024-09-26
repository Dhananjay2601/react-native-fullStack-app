import { Alert } from "react-native";
import { useEffect, useState } from "react";
import { getAllPosts } from "../services/getAllPosts";
import { getLatestPosts } from "../services/getLatestPosts";
import { searchPosts } from "../services/searchPosts";

export type FetchPostsType = {
  refreshing: boolean;
  data: any[];
  isLoading: boolean;
  refetch: () => Promise<void>;
  searchQueryPosts: (query: any) => Promise<void>;
};
export const useFetchPosts = (): FetchPostsType => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await getAllPosts();
      setData(response);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchLatestData = async () => {
    try {
      setIsLoading(true);
      const response = await getLatestPosts();
      setData(response);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const searchQueryPosts = async (query: any) => {
    try {
      setIsLoading(true);
      const response = await searchPosts(query);
      setData(response as any);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    fetchLatestData();
  }, []);

  const refetch = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  return {
    refreshing,
    data,
    isLoading,
    refetch,
    searchQueryPosts,
  };
};
