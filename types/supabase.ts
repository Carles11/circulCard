export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface ProductItemProps {
  product_icon: string | null
  product_name: string | null
}

export interface UserProps {
  id: string
  email?: string | undefined
}

export type ProductProps = {
  map: any
  length: number
  products: {
    created_at: string
    id: string
    product_icon: string | null
    product_name: string | null
  }[]
}
export type TripProps = {
  map: any
  length: number
  trip: {
    analysis_date: string
    clean_point_date: string
    collect_date: string
    collect_full_date: string
    created_at: string
    cumulative_total: string
    id: string
    material_name: string
    out_date: string
    percentage: number
    treatment_date: string
  }[]
}

export type TotalAmountProps = {
  client_id: string
  client_name: string
  created_at: string
  id: number
  product_id: string
  product_name: string
  total_amount_collected: { [year: string]: number }
}[]

export interface Database {
  length: number
  map(
    arg0: (prod: ProductItemProps) => import('react').JSX.Element
  ): import('react').ReactNode
  public: {
    Tables: {
      clients: {
        Row: {
          client_email: string | null
          client_name: string | null
          created_at: string
          id: string
        }
        Insert: {
          client_email?: string | null
          client_name?: string | null
        }
        Update: {
          client_email?: string | null
          client_name?: string | null
          created_at?: string
          id?: string
        }
        Relationships: []
      }
      materials: {
        Row: {
          analysis_date: string | null
          clean_point_date: string | null
          collect_date: string | null
          collect_full_date: string | null
          created_at: string
          cumulative_total: string | null
          id: string
          material_name: string | null
          out_date: string | null
          percentage: number | null
          treatment_date: string | null
        }
        Insert: {
          analysis_date?: string | null
          clean_point_date?: string | null
          collect_date?: string | null
          collect_full_date?: string | null
          created_at?: string
          cumulative_total?: string | null
          id?: string
          material_name?: string | null
          out_date?: string | null
          percentage?: number | null
          treatment_date?: string | null
        }
        Update: {
          analysis_date?: string | null
          clean_point_date?: string | null
          collect_date?: string | null
          collect_full_date?: string | null
          created_at?: string
          cumulative_total?: string | null
          id?: string
          material_name?: string | null
          out_date?: string | null
          percentage?: number | null
          treatment_date?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          created_at: string
          id: string
          product_icon: string | null
          product_name: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          product_icon?: string | null
          product_name?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          product_icon?: string | null
          product_name?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          email: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string
          id: string
          project_icon: string | null
          project_metal: number | null
          project_name: string
          project_others: number | null
          project_paper: number | null
          project_plastic: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          project_icon?: string | null
          project_metal?: number | null
          project_name: string
          project_others?: number | null
          project_paper?: number | null
          project_plastic?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          project_icon?: string | null
          project_metal?: number | null
          project_name?: string
          project_others?: number | null
          project_paper?: number | null
          project_plastic?: number | null
        }
        Relationships: []
      }
      rel_clients_products: {
        Row: {
          client_id: string
          created_at: string
          id: number
          product_id: string
        }
        Insert: {
          client_id: string
          created_at?: string
          id?: number
          product_id: string
        }
        Update: {
          client_id?: string
          created_at?: string
          id?: number
          product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'rel_clients_products_client_id_fkey'
            columns: ['client_id']
            referencedRelation: 'clients'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'rel_clients_products_product_id_fkey'
            columns: ['product_id']
            referencedRelation: 'products'
            referencedColumns: ['id']
          }
        ]
      }
      rel_materials_projects: {
        Row: {
          created_at: string
          id: number
          material_id: string
          project_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          material_id: string
          project_id: string
        }
        Update: {
          created_at?: string
          id?: number
          material_id?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'rel_materials_projects_material_id_fkey'
            columns: ['material_id']
            referencedRelation: 'materials'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'rel_materials_projects_project_id_fkey'
            columns: ['project_id']
            referencedRelation: 'projects'
            referencedColumns: ['id']
          }
        ]
      }
      rel_products_materials: {
        Row: {
          created_at: string
          id: number
          material_id: string
          product_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          material_id: string
          product_id: string
        }
        Update: {
          created_at?: string
          id?: number
          material_id?: string
          product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'rel_products_materials_material_id_fkey'
            columns: ['material_id']
            referencedRelation: 'materials'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'rel_products_materials_product_id_fkey'
            columns: ['product_id']
            referencedRelation: 'products'
            referencedColumns: ['id']
          }
        ]
      }
      rel_profiles_clients: {
        Row: {
          client_id: string
          created_at: string
          id: number
          profile_id: string
        }
        Insert: {
          client_id: string
          created_at?: string
          id?: number
          profile_id: string
        }
        Update: {
          client_id?: string
          created_at?: string
          id?: number
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'rel_profiles_clients_client_id_fkey'
            columns: ['client_id']
            referencedRelation: 'clients'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'rel_profiles_clients_profile_id_fkey'
            columns: ['profile_id']
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          }
        ]
      }
      second_life: {
        Row: {
          created_at: string
          id: string
          life_description: string | null
          life_icon: string | null
          life_name: string | null
          life_percentage: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          life_description?: string | null
          life_icon?: string | null
          life_name?: string | null
          life_percentage?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          life_description?: string | null
          life_icon?: string | null
          life_name?: string | null
          life_percentage?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
