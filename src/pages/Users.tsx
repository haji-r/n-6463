
import { useState, useRef, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";

interface UsersProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

const Users = ({ isCollapsed, setIsCollapsed }: UsersProps) => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastUserElementRef = useRef<HTMLDivElement>(null);

  // Mock function to generate users
  const fetchUsers = useCallback(async (pageNum: number) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    const newUsers: User[] = [];
    const startIndex = (pageNum - 1) * 10;
    
    // Generate 10 mock users per page (limit to 50 total users for demo)
    if (startIndex < 50) {
      for (let i = 0; i < 10; i++) {
        const id = startIndex + i + 1;
        if (id <= 50) {
          newUsers.push({
            id,
            name: `User ${id}`,
            email: `user${id}@example.com`,
            role: id % 3 === 0 ? "Admin" : id % 3 === 1 ? "Manager" : "User",
          });
        }
      }
    }
    
    return {
      users: newUsers,
      hasMore: startIndex + 10 < 50
    };
  }, []);

  // Load initial data
  useEffect(() => {
    const loadInitialUsers = async () => {
      setLoading(true);
      const result = await fetchUsers(1);
      setUsers(result.users);
      setHasMore(result.hasMore);
      setLoading(false);
    };

    loadInitialUsers();
  }, [fetchUsers]);

  // Setup intersection observer for infinite scroll
  useEffect(() => {
    if (loading) return;
    
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreUsers();
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    
    if (lastUserElementRef.current) {
      observer.current.observe(lastUserElementRef.current);
    }
    
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loading, hasMore, users]);

  // Function to load more users
  const loadMoreUsers = async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    const nextPage = page + 1;
    const result = await fetchUsers(nextPage);
    
    setUsers(prev => [...prev, ...result.users]);
    setPage(nextPage);
    setHasMore(result.hasMore);
    setLoading(false);
  };

  // Filter users based on search
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background flex relative">
      <Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className={`flex-1 p-4 sm:p-8 transition-all duration-300 ${
        isCollapsed ? 'ml-[60px]' : 'ml-[60px] sm:ml-64'
      }`}>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Users</h1>
            <p className="text-muted-foreground mt-1">Manage your system users</p>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        <ScrollArea className="h-[calc(100vh-220px)] rounded-md border">
          <div className="space-y-3 p-4">
            {filteredUsers.map((user, index) => {
              if (filteredUsers.length === index + 1) {
                return (
                  <div ref={lastUserElementRef} key={user.id}>
                    <Card className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-muted-foreground font-medium">
                            {user.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-foreground">{user.name}</h3>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                        <div className="text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.role === 'Admin' 
                              ? 'bg-blue-100 text-blue-800' 
                              : user.role === 'Manager' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                          }`}>
                            {user.role}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              } else {
                return (
                  <Card key={user.id} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground font-medium">
                          {user.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                      <div className="text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.role === 'Admin' 
                            ? 'bg-blue-100 text-blue-800' 
                            : user.role === 'Manager' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                        }`}>
                          {user.role}
                        </span>
                      </div>
                    </div>
                  </Card>
                );
              }
            })}
            
            {loading && (
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <Card key={i} className="p-4">
                    <div className="flex items-center gap-4">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-[200px]" />
                        <Skeleton className="h-3 w-[150px]" />
                      </div>
                      <Skeleton className="h-6 w-16 rounded-full" />
                    </div>
                  </Card>
                ))}
              </div>
            )}
            
            {!loading && filteredUsers.length === 0 && (
              <div className="text-center py-10">
                <p className="text-muted-foreground">No users found</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
};

export default Users;
