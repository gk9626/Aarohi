// API service for backend communication

export interface ApiResponse<T> {
  status: string;
  data: T;
  message: string;
}

export interface EducationData {
  scholarships: Array<{
    id: number;
    title: string;
    amount: string;
    category: string;
    deadline: string;
    eligibility: string;
    description: string;
  }>;
  learningResources: Array<{
    title: string;
    provider: string;
    type: string;
    duration: string;
    level: string;
    free: boolean;
    url: string;
  }>;
}

export interface HealthData {
  services: Array<{
    id: number;
    title: string;
    description: string;
    category: string;
    contact: string;
    location: string;
  }>;
}

export interface MentalHealthData {
  resources: Array<{
    id: number;
    title: string;
    description: string;
    category: string;
    contact: string;
    available: boolean;
  }>;
}

export interface StoriesData {
  stories: Array<{
    id: number;
    title: string;
    author: string;
    content: string;
    category: string;
    date: string;
  }>;
}

export interface EmergencyData {
  contacts: Array<{
    id: number;
    name: string;
    number: string;
    category: string;
    description: string;
    available: boolean;
  }>;
}

class ApiService {
  private baseUrl = '/api';

  private async request<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // Education API
  async getEducationData(): Promise<ApiResponse<EducationData>> {
    return this.request<EducationData>('/education');
  }

  // Health API
  async getHealthData(): Promise<ApiResponse<HealthData>> {
    return this.request<HealthData>('/health');
  }

  // Mental Health API
  async getMentalHealthData(): Promise<ApiResponse<MentalHealthData>> {
    return this.request<MentalHealthData>('/mental-health');
  }

  // Stories API
  async getStoriesData(): Promise<ApiResponse<StoriesData>> {
    return this.request<StoriesData>('/stories');
  }

  // Emergency API
  async getEmergencyData(): Promise<ApiResponse<EmergencyData>> {
    return this.request<EmergencyData>('/emergency');
  }
}

export const apiService = new ApiService(); 